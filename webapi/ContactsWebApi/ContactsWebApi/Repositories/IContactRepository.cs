using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.EntityFrameworkCore.Migrations.Operations;

namespace ContactsWebApi.Repositories
{
    public interface IContactRepository
    {
        List<Contact> GetAll();
        Contact GetById(int id);
        bool Add(Contact newContact);
        bool Update(int id, Contact modifiedContact);
        bool Delete(int id);

        //TODO add, update, delete
    }
}
