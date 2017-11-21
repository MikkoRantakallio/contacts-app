﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Services;

namespace ContactsWebApi.Controllers
{
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var contacts = _contactService.FindContacts();
            return new JsonResult(contacts);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var contact = _contactService.FindContactById(id);
            return new JsonResult(contact);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Contact newContact)
        {
            _contactService.PostContact(newContact);
            return new NoContentResult();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Contact modifiedContact)
        {
            return _contactService.PutContact(id, modifiedContact);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return _contactService.DeleteContact(id);
        }

    }
}