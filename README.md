# restart-containers
Simple program to test how the `restart` configuration option of `docker-compose.yml` affects to docker services.
https://docs.docker.com/compose/compose-file/compose-file-v3/#restart

**Services**
* `service1`: It will succesfully end execution after 30s (code 0).
* `service2`: It will raise an unhandled exception after 30s (code 1).
* `service3`: It will run forever until manually stopped.
