docker buildx build --no-cache --platform linux/amd64,linux/arm64 -t realmocean/celmino:1.0.79 --push .

# docker buildx create --use