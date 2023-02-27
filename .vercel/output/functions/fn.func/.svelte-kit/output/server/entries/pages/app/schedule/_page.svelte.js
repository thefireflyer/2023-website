import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from "../../../../chunks/index.js";
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
function range(start, end) {
  return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
}
function getPositionStyle(minutes, hours) {
  let segment = minutes / 15;
  return (hours * 4 + segment) * 3 + 1.5;
}
function getEvents(_date) {
  return [
    {
      id: 0,
      name: "test",
      start: { hours: 12, minutes: 15 },
      end: { hours: 13, minutes: 15 }
    },
    {
      id: 2,
      name: "test2",
      start: { hours: 21, minutes: 20 },
      end: { hours: 21, minutes: 45 }
    },
    {
      id: 3,
      name: "test3",
      start: { hours: 10, minutes: 30 },
      end: { hours: 10, minutes: 45 }
    },
    {
      id: 4,
      name: "test3",
      start: { hours: 23, minutes: 25 },
      end: { hours: 24, minutes: 0 }
    }
  ].map((event) => {
    return {
      ...event,
      startPosition: getPositionStyle(event.start.minutes, event.start.hours) + "em",
      height: getPositionStyle(event.end.minutes, event.end.hours) - getPositionStyle(event.start.minutes, event.start.hours) + "em"
    };
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formatted;
  let rightNowLine;
  let calendarEvents;
  let time = new Date();
  let current = new Date();
  let datePicker = new Date();
  const hours = Array(24).fill(0).map((_, idx) => {
    let hour = new Date().setHours(idx, 0, 0, 0);
    return Array(4).fill(0).map((_2, idx2) => {
      let segment = new Date(hour);
      segment.setMinutes(idx2 * 15);
      return segment.getHours() + `:` + segment.getMinutes();
    });
  });
  let rightNowLineRef;
  formatted = current.toLocaleDateString();
  range(1, daysInMonth(datePicker.getMonth(), datePicker.getFullYear()));
  rightNowLine = getPositionStyle(time.getMinutes(), time.getHours()) + "em";
  calendarEvents = getEvents();
  return `<div class="${"relative grow p-3 flex flex-col gap-3 overflow-y-scroll"}"><div class="${"flex flex-row p-3 gap-3 rounded-lg items-center border-2 border-neutral-800"}"><button class="${"flex gap-3 justify-center items-center h-full px-3 rounded-full bg-neutral-200 dark:bg-neutral-800"}"><span class="${"material-icons-outlined text-2xl text-neutral-600 dark:text-neutral-300"}">event</span>
			<span class="${"text-md"}">${escape(formatted)}</span></button>

		<div class="${"grow"}"></div>

		<a href="${"schedule/create"}" class="${"rounded-full bg-pink-700 flex justify-center items-center h-12 w-12"}"><span class="${"text-3xl material-icons"}">add </span></a></div>

	${``}

	<div class="${"grow flex p-3 rounded-lg border-2 border-neutral-800 overflow-y-scroll relative"}"><div>${each(hours, (hour) => {
    return `${each(hour, (segment) => {
      return `<div class="${"h-12 flex px-3 items-center gap-3"}">${escape(segment)}
					</div>`;
    })}`;
  })}</div>
		<div class="${"grow grid relative"}"><div class="${"grow flex flex-col h-6 gap-3"}"></div>
			${each(hours, (hour) => {
    return `${each(hour, (segment) => {
      return `<div class="${"grow flex flex-col h-12 gap-3 px-3 overflow-hidden"}"><div class="${"border-b border-neutral-800"}"></div>
					</div>`;
    })}`;
  })}
			<div class="${"grow flex flex-col h-6 gap-3"}"></div>
			${each(calendarEvents, (event) => {
    return `<a href="${"schedule/events/" + escape(event.id, true)}" class="${"p-1 px-2 absolute left-0 w-full rounded-md bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 border-2 border-neutral-800"}" style="${"top:" + escape(event.startPosition, true) + "; height:" + escape(event.height, true) + ";"}">${escape(event.name)}
				</a>`;
  })}</div>
		${time.toDateString() == current.toDateString() ? `<div class="${"w-full absolute left-0"}" style="${"top:" + escape(rightNowLine, true)}"${add_attribute("this", rightNowLineRef, 0)}><div class="${"h-px bg-rose-400 dark:bg-rose-800"}"></div></div>` : ``}</div></div>`;
});
export {
  Page as default
};
