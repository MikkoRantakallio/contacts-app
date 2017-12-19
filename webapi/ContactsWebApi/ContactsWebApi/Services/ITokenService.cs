using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace ContactsWebApi.Services
{
    public interface ITokenService
    {
        Task<Token> RequestAccessToken(AuthRequest authRequest);
    }
}
