FROM ghcr.io/renovatebot/renovate:38.130

USER root

COPY elbandi-ca.crt /usr/local/share/ca-certificates/

RUN /usr/sbin/update-ca-certificates

USER 1000
