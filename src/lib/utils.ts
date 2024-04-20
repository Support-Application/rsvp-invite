import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDay = (date: string) => {
  const d = new Date(date);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[d.getDay()];
  return dayOfWeek;
}

export const getMonth = (date: string) => {
  const d = new Date(date);
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthOfYear = monthsOfYear[d.getMonth()];
  return monthOfYear;
}

export const getYear = (date: string) => {
  const d = new Date(date);
  return d.getFullYear();
}

export const getDate = (date: string) => {
  const d = new Date(date);
  return d.getDate(); 
}

export const getTime = (date: string) => {
  const d = new Date(date);
  let hours = d.getHours();
  const minutes = d.getMinutes();
  let period = 'AM';


  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  if (hours === 0) {
    hours = 12;
  }


  const formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes;


  return `${hours}${period}`;
}

export const eventDetails = {
  "event": {
    "type": "funeral",  // Specify the event type: party, corporate, funeral, etc.
    "title": "Memorial Service for John Doe",
    "host": "The Doe Family",
    "startTime": "2024-06-15T10:00:00",
    "endTime": "2024-06-15T12:00:00",
    "date": "2024-06-15",
    "location": {
      "venue": "St. Mary's Church",
      "address": "5678 Peaceful Lane, Springfield, IL 62704",
      "mapLink": "https://maps.google.com/?q=5678+Peaceful+Lane,Springfield"
    },
    "details": {
      "description": "We invite you to join us in remembering the life of John Doe. A reception will follow the ceremony at the Springfield Community Center.",
      "additionalInformation": [
        {
          "title": "Reception",
          "description": "Join the family for a reception at Springfield Community Center, 123 Main St., immediately following the service."
        },
        {
          "title": "Flowers and Donations",
          "description": "In lieu of flowers, donations may be made to the Springfield Heart Foundation."
        }
      ]
    },
    "rsvp": {
      "required": true,
      "deadline": "2024-06-10",
      "email": "contact@doefamily.com",
      "additionalNotes": "For those who cannot attend, the service will be streamed online. Details to follow."
    },
    "images": {
      "banner": "https://example.com/path/to/event/banner.jpg",
      "gallery": [
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      ]
    },
    "customization": {
      "themeColor": "#555555",
      "fontStyle": "Serif"
    }
  }
}