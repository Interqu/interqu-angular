import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AppSyncService {

  private socket!: WebSocket;

  constructor() {}

  openWebSocketConnection(): void {
    // Establish WebSocket connection to AWS AppSync endpoint
    const creds = {
        "host":environment.interqu_appsync_host,
        "x-api-key":environment.interqu_appsync_api_key
    }
    const header = window.btoa(JSON.stringify(creds));
    const payload = window.btoa(JSON.stringify({}));


    this.socket = new WebSocket(`wss://${environment.interqu_appsync_realtime_host}/graphql?header=${header}&payload=${payload}`, ["graphql-ws"]);
    this.socket.onopen = this.onSocketOpen.bind(this);
    this.socket.onmessage = this.onSocketMessage.bind(this);
    this.socket.onerror = this.onSocketError.bind(this);
    this.socket.onclose = this.onSocketClose.bind(this);
  }


  private onSocketOpen() {
    console.log('WebSocket connection opened');
    this.socket.send(
        JSON.stringify({
          type: "connection_init",
        })
      );
  }

  private onSocketMessage(event: MessageEvent) {
    console.log('Received message:', event.data);
    const message = JSON.parse(event.data);
    console.log(message);
  
    switch (message.type) {
      case 'start_ack':
        console.log('start_ack');
        break;
      case 'error':
        console.error(message);
        break;
      case 'data':
        console.log(message.payload.data.onCreateTestProcess.content);
        break;
    }
  }

  private onSocketError(event: Event) {
    console.error('WebSocket error:', event);
  }

  private onSocketClose(event: CloseEvent) {
    console.log('WebSocket connection closed:', event);
  }

  subscribe(): Observable<any> {
    // Subscripe to GraphQL Mutation
    const subscribeMessage = {
        id: window.crypto.randomUUID(),
        type: "start",
        payload: {
          data: JSON.stringify({
            query: `subscription OnUpdateVideoProcessing {
              onUpdateVideoProcessing(connection_id: "test") {
                connection_id
                interview_id
                progress
              }
            }
            `,
          }),
          extensions: {
            authorization: {
              "x-api-key": environment.interqu_appsync_api_key,
              host: environment.interqu_appsync_host,
            },
          },
        },
      };

    // Send query over WebSocket
    this.socket.send(JSON.stringify(subscribeMessage));

    return new Observable(observer => {
      this.socket.onmessage = event => {
        console.log('Received query response:', event.data);
        observer.next(JSON.parse(event.data));
        observer.complete();
      };

      // Handle errors
      this.socket.onerror = errorEvent => {
        console.error('WebSocket error:', errorEvent);
        observer.error('WebSocket error');
      };
    });
  }
}
