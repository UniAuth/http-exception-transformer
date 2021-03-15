# NodeJS Http Exception Handler

Always wanted to ensure that your express application to have extensive error handling and expose a structured and reliable API at the same time? This package is written to ensure the same.

## **Features**
- Exceptions for commonly encountered problems like NotFound (404), Internal Server Error (500), Conflicts (409)
- **Just throw errors.** No need to wrap codebase into try catch blocks and make codebase redundant.
- Easy to use API.

## Sample

To trigger an exception, **throw the error anywhere** 
```js
app.get("/id",(req, res)=>{
    if(req.params.id == 0){
        throw new BadRequestException("Only +ve ids accepted")
    }
})
```

Simply integrate the error to response transformer using 
```js
app.use(HttpExceptionTransformer)
```

Renders the following response
```json
{
  "code": 400,
  "error": true,
  "message": "Only +ve ids accepted"
}
```

## Development
Since the codebase is redundant, and almost all derived classes have the same structure, we're geneating the exceptions from a json file. Therefore if you wish to make changes in the exception body, please change the codebase in the generators directory. 