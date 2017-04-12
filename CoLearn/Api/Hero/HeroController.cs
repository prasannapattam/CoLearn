using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CoLearn.Api.Hero
{
    public class HeroController : Controller
    {
        public List<HeroModel> List()
        {
            return HeroData.Heroes;
        }

        public HeroModel View(int id)
        {
            return HeroData.Heroes.Single(h => h.Id == id);
        }

        public List<HeroModel> Save([FromBody] HeroModel hero)
        {
            HeroModel data = HeroData.Heroes.Single(h => h.Id == hero.Id);

            data.Name = hero.Name;
            data.Team = hero.Team;
            data.Group = hero.Group;

            return this.List();
        }
    }
}

