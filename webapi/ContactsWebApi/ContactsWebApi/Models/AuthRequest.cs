using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsWebApi.Models
{
    public class AuthRequest
    {
        public string UserName { get; set; }
        public string PassWord { get; set; }
    }
}
