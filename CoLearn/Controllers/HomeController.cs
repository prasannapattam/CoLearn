using Microsoft.AspNetCore.Mvc;

namespace CoLearn.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Redirect("/index.html");
        }
    }
}