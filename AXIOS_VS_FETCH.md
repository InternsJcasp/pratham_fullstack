| Feature                         | Axios                  | Fetch                                     |
| ------------------------------- | ---------------------- | ----------------------------------------- |
| Type                            | External library       | Browser built-in API                      |
| Installation                    | Required               | Not required                              |
| JSON response                   | Automatically parsed   | Need `response.json()`                    |
| Request configuration           | Easy                   | More verbose                              |
| Error handling                  | Rejects on HTTP errors | Does not reject for 4xx/5xx automatically |
| Interceptors                    | Built-in               | Not built-in                              |
| Request cancellation            | Supported              | Supported with AbortController            |
| Request/response transformation | Built-in               | Manual                                    |
| Default behavior                | Convenient             | Low-level                                 |
| React usage                     | Very common            | Also very common                          |
