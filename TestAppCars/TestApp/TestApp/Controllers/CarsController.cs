using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestApp.Library.DAL.Models;

namespace TestApp.Controllers
{
    public class CarsController : Controller
    {
        private readonly TestAppEntities _ctx;

        public CarsController(TestAppEntities ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var model = _ctx.Cars_Luis.ToList();
            return View(model);
        }

        [HttpGet]
        public IActionResult Add()
        {
            var model = new Cars_Luis();
            return View(model);

        }

        [HttpPost]
        public IActionResult Add(Cars_Luis carModel)
        {
            // Trabajar y agregar el model.

            _ctx.Cars_Luis.Add(carModel);
            _ctx.SaveChanges();

            return RedirectToAction("Index");

        }
    }
}
