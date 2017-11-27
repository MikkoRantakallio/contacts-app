using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Newtonsoft.Json;

namespace ContactsWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private List<Contact> _contacts;

        public ContactRepository()
        {
            _contacts = new List<Contact>();
            Initialize();
        }

        public List<Contact> GetAll()
        {
            return _contacts;
        }

        public Contact GetById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
//            return _context.Contacts.FirstOrDefault(c => c.Id == id);
        }

        public bool Add(Contact newContact)
        {
            // Get the biggest id value, increment id and set it to the new contact Id
            int max = 0;
            for (int i = 0; i < _contacts.Count; i++)
            {
                if (_contacts[i].Id > max)
                {
                    max = _contacts[i].Id;
                }
            }
            newContact.Id = max + 1;

            _contacts.Add(newContact);
            return true;
        }

        public bool Update(int id, Contact modifiedContact)
        {
            var contact = GetById(id);
            int ind =_contacts.IndexOf(contact);
            _contacts[ind] = modifiedContact;

            return true;
        }

        public bool Delete(int id)
        {
            _contacts.Remove(GetById(id));
            return true;
        }

        private void Initialize()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Mikko", "Rantakallio", "0405833473", "Karkkolantie 46", "Lappeenranta"),
                new Contact(2, "James", "Bond", "0400070007", "Main Street 10", "London")
            };
        }
    }
}
