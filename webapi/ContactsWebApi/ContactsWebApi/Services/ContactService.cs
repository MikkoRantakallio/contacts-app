using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ContactsWebApi.Services
{
    public class ContactService : IContactService
    {
        private IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindContacts()
        {
            var contacts = _contactRepository.GetAll();
            return contacts;
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.GetById(id);
        }

        public IActionResult PostContact(Contact newContact)
        {
            _contactRepository.Add(newContact);
            return new NoContentResult();
        }

        public IActionResult PutContact(int id, Contact modifiedContact)
        {
            _contactRepository.Update(id, modifiedContact);
            return new NoContentResult();
        }

        public IActionResult DeleteContact(int id)
        {
            _contactRepository.Delete(id);
            return new NoContentResult();
        }
    }
}
