docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i https://raw.githubusercontent.com/digicon-hack2-trap3/libra-server/main/docs/openapi.yml \
    -g typescript-fetch \
    -o local/src/lib/apis/generated