using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ContactsWebApi.Services
{
    public class TokenService : ITokenService
    {
        public Token GetToken(AuthRequest authRequest)
        {
            //_contactRepository.Add(newContact);
            return null;
        }
    }
}
