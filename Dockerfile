FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

COPY . /app
WORKDIR /app

# build stage
FROM base AS build

WORKDIR /app

# install dependencies
RUN pnpm install -g @angular/cli@16

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN ng build --aot --build-optimizer --optimization

# production image
FROM httpd:latest AS prod

# copy artifacts
COPY --from=build /app/dist/interqu-angular/ /usr/local/apache2/htdocs/
