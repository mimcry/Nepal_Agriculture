// Function to get the day name (e.g., Sunday, Monday) from a date string
export function getDayName(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long' }; // Full day name
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Function to format time to a 12-hour format with AM/PM
export function formatTime(dateTimeString) {
  const date = new Date(dateTimeString);
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock
  return `${hours}:${minutes} ${ampm}`;
}
