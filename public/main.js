function main() {
  console.log("Hi students!");
  // initTodayView();
  // initTodoList();
  // initCalendar();

  setDateWelcomeSegment();

  setInterval(() => {
    setDateWelcomeSegment();
  }, 1000);
}
window.addEventListener("DOMContentLoaded", main);