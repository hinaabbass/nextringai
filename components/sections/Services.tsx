import {
  Phone,
  Calendar,
  Repeat,
  Star,
  TriangleAlert,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const introText =
  "Built specifically for roofing contractors to convert missed calls into booked jobs automatically";

const services = [
  {
    icon: <Phone className="h-6 w-6 text-emerald-600" />,
    iconBg: "bg-emerald-50",
    title: "24/7 AI Call Answering System",
    subtitle: "Answers every call in your business name",
    body: "When you miss a call after 2 rings, NextRing AI automatically takes over the call in your business name, speaks naturally with homeowners, and captures every enquiry professionally day or night.",
    bullets: [
      "AI answers after 2 missed rings",
      "Captures caller details and job information",
      "Trained on your roofing services and area",
      "Available 24/7 including weekends",
    ],
    stat: "Never lose jobs just because you missed the phone",
    statColor: "text-emerald-700",
  },
  {
    icon: <TriangleAlert className="h-6 w-6 text-red-600" />,
    iconBg: "bg-red-50",
    title: "Emergency Call Detection",
    subtitle: "Urgent roofing calls flagged in real time",
    body: "NextRing AI detects urgent situations like leaks, storm damage, or structural issues during the call and instantly notifies you so you can respond faster than competitors.",
    bullets: [
      "Detects emergency keywords automatically",
      "Instant high-priority alerts sent to you",
      "Captures full job context and urgency",
      "Separate from normal enquiries",
    ],
    stat: "Win urgent jobs by responding first",
    statColor: "text-red-700",
  },
  {
    icon: <Calendar className="h-6 w-6 text-violet-600" />,
    iconBg: "bg-violet-50",
    title: "Smart Booking Automation",
    subtitle: "AI sends booking links with live availability",
    body: "After each call, homeowners receive a booking link showing your real availability so they can instantly choose a time that suits them.",
    bullets: [
      "Booking link sent automatically after calls",
      "Shows only available time slots",
      "Google Calendar sync included",
      "Auto reminders before appointments",
    ],
    stat: "More bookings with zero scheduling effort",
    statColor: "text-violet-700",
  },
  {
    icon: <Repeat className="h-6 w-6 text-orange-600" />,
    iconBg: "bg-orange-50",
    title: "Lead Follow-Up Automation",
    subtitle: "AI nurtures leads until they respond",
    body: "NextRing AI automatically follows up on leads and quotes over several days, helping you recover jobs that would normally go cold.",
    bullets: [
      "Follow-ups at 2 hours, Day 2, and Day 5",
      "Quote reminders automatically sent",
      "Stops when customer responds",
      "Designed to increase conversions",
    ],
    stat: "Turn cold leads into paying customers",
    statColor: "text-orange-700",
  },
  {
    icon: <Star className="h-6 w-6 text-yellow-600" />,
    iconBg: "bg-yellow-50",
    title: "Reputation Growth System",
    subtitle: "Request reviews at the perfect time",
    body: "After every completed job, NextRing AI automatically requests reviews to help you build trust, improve rankings, and generate more inbound calls.",
    bullets: [
      "Automated Google review requests",
      "Instant alerts for new reviews",
      "Early warning for unhappy customers",
      "Helps improve online reputation",
    ],
    stat: "More reviews → higher ranking → more inbound jobs",
    statColor: "text-yellow-700",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-teal-600" />,
    iconBg: "bg-teal-50",
    title: "Business Performance Dashboard",
    subtitle: "Real-time visibility into your business",
    body: "Track calls, leads, bookings, follow-ups, and reviews in real time through a simple dashboard designed for busy contractors.",
    bullets: [
      "Real-time lead and booking tracking",
      "Weekly performance reports",
      "Emergency + revenue insights",
      "Mobile app access anywhere",
    ],
    stat: "Run your business with complete clarity",
    statColor: "text-teal-700",
  },
];

const Services = () => {
  return (
    <section
      className="w-full bg-color-background-soft px-4 py-16 sm:px-8"
      id="features"
    >
      <div className="mx-auto max-w-7xl">
        {/* heading */}
        <div className="mx-auto mb-6 max-w-3xl px-4 text-center sm:px-0 md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gray-800">
              Full Feature Set
            </p>
          </div>

          <h2 className="text-[28px] leading-[1.15] tracking-[-0.04em] text-[#111827] sm:text-[36px] md:text-[28px] lg:text-[38px] font-semibold">
            Everything You Need to Never Miss a Job
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-[#6B7280] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            {introText}
          </p>
        </div>

        {/* Grid (3 columns) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[20px] border border-gray-200 bg-white p-6 sm:p-9 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className={`mb-5 flex items-center justify-center rounded-[14px] ${feature.iconBg}
    w-[44px] h-[44px] sm:w-[54px] sm:h-[54px]`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-semibold tracking-tight text-gray-900">
                {feature.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-2 mb-4 text-[15px] text-gray-700">
                {feature.subtitle}
              </p>

              {/* Body */}
              <p className="mb-5 text-[14.5px] leading-[1.7] text-gray-800">
                {feature.body}
              </p>

              {/* Bullets */}
              <ul className="mb-6 flex flex-col gap-2.5">
                {feature.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[13.5px] text-gray-800"
                  >
                    <span className="mt-[2px] text-gray-800">•</span>
                    <span className="text-gray-600">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Result */}
              <div
                className={`mt-auto flex items-start gap-2 border-t border-gray-100 pt-4 text-[12.5px] font-medium ${feature.statColor}`}
              >
                <TrendingUp className="mt-[1px] h-3.5 w-3.5 flex-shrink-0" />
                <span className="text-gray-900 text-[14px]">
                  {feature.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
