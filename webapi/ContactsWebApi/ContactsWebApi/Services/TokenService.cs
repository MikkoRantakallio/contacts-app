using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.AspNetCore.Authentication.Twitter;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace ContactsWebApi.Services
{
    public class TokenService : ITokenService
    {
        private IConfiguration _configuration;

        public TokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<Token> RequestAccessToken(AuthRequest authRequest)
        {
            Token token = null;

            var requestParams = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>("client_id", _configuration["AzureSettings:ApplicationId"]),
                new KeyValuePair<string, string>("resource", _configuration["AzureSettings:Resource"]),
                new KeyValuePair<string, string>("username", authRequest.UserName),
                new KeyValuePair<string, string>("password", authRequest.PassWord),
                new KeyValuePair<string, string>("grant_type", "password"),
                new KeyValuePair<string, string>("client_secret", _configuration["AzureSettings:Key"])
            };

            string endPoint = _configuration["AzureSettings:LoginPath"] + _configuration["AzureSettings:DirectoryId"] +
                              "/oauth2/token";

            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Cache-Control", "no-cache");
                HttpContent content = new FormUrlEncodedContent(requestParams);
                var response = await httpClient.PostAsync(endPoint, content);

                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();
                    token = JsonConvert.DeserializeObject<Token>(data);
                }
            }
            return token;
        }
    }
}
