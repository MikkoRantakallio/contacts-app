using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ContactsWebApi.Services
{
    public interface IContactService
    {
        List<Contact> FindContacts();
        Contact FindContactById(int id);

        IActionResult PostContact(Contact newContact);
        IActionResult PutContact(int id, Contact modifedContact);
        IActionResult DeleteContact(int id);
    }
}