using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace ContactsWebApi.Controllers
{
    public class AuthenticationController : Controller
    {
        private ITokenService _tokenService;

        public AuthenticationController(ITokenService tokenService, IConfiguration configuration)
        {
            _tokenService = tokenService;
        }

        [HttpPost]
        [Route("api/auth")]
        public async Task<IActionResult> Post([FromBody]AuthRequest authRequest)
        {
            var token = await _tokenService.RequestAccessToken(authRequest);
            return new JsonResult(token);
        }
    }
}