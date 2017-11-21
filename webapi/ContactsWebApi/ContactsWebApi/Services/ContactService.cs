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
        private readonly IContactRepository contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            this.contactRepository = contactRepository;
        }

        public List<Contact> FindContacts()
        {
            var contacts = contactRepository.GetAll();
            return contacts;
        }

        public Contact FindContactById(int id)
        {
            return contactRepository.GetById(id);
        }

        public IActionResult PostContact(Contact newContact)
        {
            if (contactRepository.Add(newContact))
            {
                return new OkResult();
            }
            else
            {
                return new NotFoundResult();
            }
        }

        public IActionResult PutContact(int id, Contact modifiedContact)
        {
            if (contactRepository.Update(id, modifiedContact))
            {
                return new OkResult();

            }
            else
            {
                return new NotFoundResult();
            }
        }

        public IActionResult DeleteContact(int id)
        {
            if (contactRepository.Delete(id))
            {
                return new OkResult();
            }
            else
            {
                return new NotFoundResult();
            }
        }
    }
}
