using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestApp.Library.BLL;
using TestApp.Library.DAL.Models;
using TestApp.Models;

namespace TestApp.Controllers
{
    public class SessionController : Controller
    {
        private readonly TestAppEntities _ctx;
        TimeSpan start = new TimeSpan(8, 0, 0); //8 am
        TimeSpan end = new TimeSpan(22, 0, 0); //10 pm

        public SessionController(TestAppEntities ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            var result = await Session.ValidateCredentials(_ctx, model.Email, model.Password);
            TimeSpan now = DateTime.Now.TimeOfDay;

            if (String.IsNullOrWhiteSpace(result.Item2))
            {
                // Todo salio bien, crear sesion.
                bool matchTime = false;
                if ((now > start) && (now < end))
                {
                    matchTime = true;
                }

                var sessionObject = new SessionViewModel()
                {
                    UserId = result.Item1.user_id,
                    FirstNames = result.Item1.first_names,
                    LastNames = result.Item1.last_names,
                    Email = result.Item1.email,
                    Password = result.Item1.password,
                    IsActive = result.Item1.is_active,
                    CreatedAt = result.Item1.created_at,
                    ShowPersonsMenu = matchTime
                };

                HttpContext.Session.SetJson("SessionObject", sessionObject);


                return RedirectToAction(nameof(UsersController.Index), "Home");
            }
            else
                ModelState.AddModelError(String.Empty, result.Item2);

            return View(model);
        }

        [HttpGet]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction(nameof(SessionController.Login));
        }

    }
}
