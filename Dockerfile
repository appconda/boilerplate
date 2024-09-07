FROM ubuntu:20.04

LABEL maintainer="team@realmocean.io"

ENV version latest \
    TZ=Asia/Tel_Aviv \
    PHP_VERSION=7.4

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update 
RUN apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common

RUN apt install -y docker.io
RUN docker --version

RUN apt install -y docker-compose
RUN docker-compose --version

#RUN curl -L https://github.com/docker/compose/releases/download/1.25.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose && \
#    chmod +x /usr/local/bin/docker-compose

#RUN docker-compose --version

COPY ./installer /install/data

COPY ./installer/.env /install/data/.env

COPY ./realmocean /install/realmocean

RUN ls -ll /install/data

RUN chmod +x /install/data/install.sh

CMD /bin/bash -c "/install/data/install.sh"