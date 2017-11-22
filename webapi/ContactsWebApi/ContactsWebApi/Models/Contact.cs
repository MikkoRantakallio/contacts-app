using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ContactsWebApi.Models
{
    public class Contact
    {
        public int Id { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }

        public Contact(int id, string firstName, string lastName, string phoneNumber, string streetAddress, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            StreetAddress = streetAddress;
            City = city;
        }

        public Contact()
        {
            
        }
    }

    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options)
            : base(options)
        { }

        public DbSet<Contact> Contacts { get; set; }
    }
}
