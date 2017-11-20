using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Repositories;

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
    }
}
