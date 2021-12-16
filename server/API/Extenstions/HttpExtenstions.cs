using System.Text.Json;
using API.RequestHelpers;
using Microsoft.AspNetCore.Http;

namespace API.Extenstions
{
    public static class HttpExtenstions
    {
        public static void AddPaginationHeader(this HttpResponse response,MetaData metaData)
        {
            var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

            response.Headers.Add("Pagination",JsonSerializer.Serialize(metaData,options));
            response.Headers.Add("Access-Control-Expose-Headers","Pagination");
            
        }
    }
}