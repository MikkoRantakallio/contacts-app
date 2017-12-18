using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ContactsWebApi.Services
{
    public interface ITokenService
    {
        Token GetToken(AuthRequest authRequest);
    }
}
