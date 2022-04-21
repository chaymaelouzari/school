using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using School.Models;
using Microsoft.EntityFrameworkCore;

namespace School.Controllers
{
    public class EstudiantesController : Controller
    {
        private readonly ModelSchool_context;
        public IActionResult Index()
        {
            var estudiantes = _context.Person.ToList();
            return View(estudiantes);
           
        }
         public EstudiantesController(ModelSchool context)
        {
            _context = context;
        }
    }
}