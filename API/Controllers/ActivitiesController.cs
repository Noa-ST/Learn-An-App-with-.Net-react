using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetAll()
        {
            return await Mediator.Send(new GetActivityList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetById(string id)
        {
            return await Mediator.Send(new GetActivityDetail.Query { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<string>> Create(Activity activity)
        {
            return await Mediator.Send(new CreateActivity.Command{Activity = activity });
        }

        [HttpPut]
        public async Task<ActionResult> Edit(Activity activity)
        {
             await Mediator.Send(new EditActivity.Command { Activity = activity });
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            await Mediator.Send(new DeleteActivity.Command { Id = id });
            return Ok();
        }
    }
}
