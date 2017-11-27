using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Newtonsoft.Json;

namespace ContactsWebApi.Repositories
{
    public class ContactDbRepository : IContactRepository
    {
        private List<Contact> _contacts;
        private ContactContext _context;

        public ContactDbRepository(ContactContext context)
        {
            _context = context;
            _contacts = new List<Contact>();
            Initialize();
        }

        public List<Contact> GetAll()
        {
            return _context.Contacts.ToList();
        }

        public Contact GetById(int id)
        {
            return _context.Contacts.FirstOrDefault(c => c.Id == id);
        }

        public bool Add(Contact newContact)
        {
            _context.Contacts.Add(newContact);
            _context.SaveChanges();
            return true;
        }

        public bool Update(int id, Contact modifiedContact)
        {
            var contact = GetById(id);
            contact.City = modifiedContact.City;
            contact.FirstName = modifiedContact.FirstName;
            contact.LastName = modifiedContact.LastName;
            contact.PhoneNumber = modifiedContact.PhoneNumber;
            contact.StreetAddress = modifiedContact.StreetAddress;

            _context.Contacts.Update(contact);
            _context.SaveChanges();

            return true;
        }

        public bool Delete(int id)
        {
            _context.Contacts.Remove(GetById(id));
            _context.SaveChanges();
            return true;
        }

        private void Initialize()
        {
        }
    }
}
