// for now this will handle the static data
// TODO : In the future, we'll handle and get data from API instead
export const fetchSchedule = async () => {
    return [
      {
        Monday: { subject: "Soft Skill", time: "08:30 AM - 10:00 AM", generation: 10, group: [1, 2], room: "A208" },
        Tuesday: { subject: "Linear Algebra", time: "10:15 AM - 11: 45 AM", generation: 9, group: [1, 2] },
        Wednesday: { subject: "Advanced Programming", time: "1:00 PM - 2:30 PM", generation: 10, group: [1, 2] },
        Thursday: { subject: "Cloud Computing", time: "2:45 PM - 4:15 PM", generation: 10, group: [1, 2] },
        Friday: { subject: "Web Design", time: "2:45 PM - 4:15 PM", generation: 10, group: [1, 2] },
      },
      {
        Tuesday: { subject: "Soft Skill", time: "08:30 AM - 10:00 AM", generation: 10, group: [1, 2], room: "A208" },
        Monday: { subject: "Linear Algebra", time: "10:15 AM - 11: 45 AM", generation: 9, group: [1, 2] , room: "A208"  },
        Wednesday: { subject: "Advanced Programming", time: "1:00 PM - 2:30 PM", generation: 10, group: [1, 2] },
        Thursday: { subject: "Cloud Computing", time: "2:45 PM - 4:15 PM", generation: 10, group: [1, 2] },
        Friday: { subject: "Web Design", time: "1:00 PM - 2:30 PM", generation: 10, group: [1, 2] },
      },
    ];
  };
  


// <pre>{JSON.stringify(data, null, 10)}</pre> : replace the "data" with the actual data to print out the data on the screen