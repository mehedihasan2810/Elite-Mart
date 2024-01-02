import { nanoid } from "@reduxjs/toolkit";

// Data for the header buttons
export const headerBtnData = [
  {
    id: nanoid(),
    textContent: "Trending",
    datasetValue: "trending",
  },
  {
    id: nanoid(),
    textContent: "Best Sellers",
    datasetValue: "best-sellers",
  },
  {
    id: nanoid(),
    textContent: "Best Rated",
    datasetValue: "best-rated",
  },
];

// Data for the trending slider
export const sliderTrendingData = [
  {
    id: "bHyEJUhd_dhU3evWu8kcV",
    url: "https://i.ibb.co/QM6KDh9/shoes4.jpg",
    alt: "shoes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBcUFBQURBUUFBQUFBQUFBQUFBQUFBQUFBQ0JBVUdBUUVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBZi9hQUF3REFRQUNFQU1RQUFBQXdqc1U2Ly9FQUNJUUFBSUJBZ1VGQUFBQUFBQUFBQUFBQUFFQ0F3QUVCUkVoTVZFU0V4UnhrZi9hQUFnQkFRQUJQd0N4Z1IvSWtsVE9LR1BxZlhLcnpEUmEyZG5jdE1vZWNFOWh0SEE1QTRvRWpVRWpZL0tabVoyZG1abWJkbUpKUHNtdi84UUFGQkVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUFnQkFnRUJQd0IvLzhRQUZCRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFQL2FBQWdCQXdFQlB3Qi8vOWs9JyAvPgogICAgPC9zdmc+CiAg",
  },
  {
    id: "G19V2YkSXRZojWIue8xVB",
    url: "https://i.ibb.co/FsQGVPG/women-shoes2.jpg",
    alt: "shoes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBMEFFQU1CSWdBQ0VRRURFUUgveEFBcEFBRUJBUUFBQUFBQUFBQUFBQUFBQUFBR0JBVUJBUUVBQUFBQUFBQUFBQUFBQUFBQUFBTUUvOW9BREFNQkFBSVFBeEFBQUFEZmVtNHdvLy9FQUNRUUFBSUNBUU1EQlFFQUFBQUFBQUFBQUFJREFRUUZBQVlSRWhOQklqSlNZWFBTLzlvQUNBRUJBQUUvQU03bk04R1VzVTNObElnNlRyRUVjZHBnZXlDK1FGcmJlNDZ1ZXBUUEFxdHA5Rm12NUF2NEx4T3Q5MEtqcWpYdFgxU0xrL1V6QngwNjJnZ01od3hSSFZDaVFEMExLWjcvQU9rbHIvL0VBQmtSQVFBQ0F3QUFBQUFBQUFBQUFBQUFBQUlBQVFNUk1mL2FBQWdCQWdFQlB3QTJqa3M5M1AvRUFCa1JBUUFDQXdBQUFBQUFBQUFBQUFBQUFBSUFBUU1STWYvYUFBZ0JBd0VCUHdCVUZpcGMxUC9aJyAvPgogICAgPC9zdmc+CiAg",
  },
  {
    id: "NdUI2fhGStDlBX7qpnHNE",
    url: "https://i.ibb.co/FqdB0tS/women-shoes3.webp",
    alt: "shoes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBcEFBQURBUUFBQUFBQUFBQUFBQUFBQUFBQ0F3WUhBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUYvOW9BREFNQkFBSVFBeEFBQUFDclZsZ0dJZi9FQUJ3UUFBTUJBUUFEQVFBQUFBQUFBQUFBQUFFQ0F3UUFCU0ZCa2YvYUFBZ0JBUUFCUHdBMG5PWlkvblZwTmw1UEo3NnNFcHFveXF2b0U5ZmRzRXlvMFVDbjRHNy94QUFhRVFBQUJ3QUFBQUFBQUFBQUFBQUFBQUFBQVFJUkZDR0IvOW9BQ0FFQ0FRRS9BSktqdkdIL3hBQVlFUUFDQXdBQUFBQUFBQUFBQUFBQUFBQUFBUkVVUWYvYUFBZ0JBd0VCUHdDcEdvLy8yUT09JyAvPgogICAgPC9zdmc+CiAg",
  },
  {
    id: "8abeT04zJC60XHXvKiabn",
    url: "https://i.ibb.co/r4Dk0kt/shoes3.jpg",
    alt: "shoes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBb0FFQU1CSWdBQ0VRRURFUUgveEFBb0FBRUJBUUFBQUFBQUFBQUFBQUFBQUFBR0F3VUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBVC8yZ0FNQXdFQUFoQURFQUFBQU1DYVFpZFgvOFFBSXhBQUFRTUVBUVFEQUFBQUFBQUFBQUFBQWdFREJBQUZCaEVpRXhRak0xR1JvZi9hQUFnQkFRQUJQd0RIc1lZbVdTOTNDUkc2aHNzbU1UUmE4Z2p0U3JzN1BMaHVNWEczSkhkUWVNaU1ISWkrU3JHM0hFeEs5SWhsN2gvUlNwWm5wZVMvZGYvRUFCa1JBQUlEQVFBQUFBQUFBQUFBQUFBQUFBRUNBQU1SVWYvYUFBZ0JBZ0VCUHdBMk1DdWNuLy9FQUJnUkFRRUFBd0FBQUFBQUFBQUFBQUFBQUFJQkFCRlIvOW9BQ0FFREFRRS9BSUNvdDl6LzJRPT0nIC8+CiAgICA8L3N2Zz4KICA=",
  },
  {
    id: "3JNGDGmK3ccHZYH4MU69M",
    url: "https://i.ibb.co/vZMkBz4/shoes2.webp",
    alt: "shoes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCQUFFQU1CSWdBQ0VRRURFUUgveEFBb0FBRUJBUUFBQUFBQUFBQUFBQUFBQUFBRkF3Y0JBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FNQXdFQUFoQURFQUFBQU4xQ0htZi94QUFpRUFBQ0FRTUVBZ01BQUFBQUFBQUFBQUFCQWdNQUJBVUdFU0ZpRWlJVU1qUC8yZ0FJQVFFQUFUOEFMQlFTU0FCeVNlQUt4MnA4RGxKMmdzc2xCTEtKSFFJRzltOE9TeTllMVovU2w1bXBuV1hMUDhKM0JhMk80RzIzMUJRaXNKb20xdzJRZ3U3Y3hlaXNEK2pPZkxzelYvL0VBQlFSQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvMmdBSUFRSUJBVDhBZi8vRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FJQVFNQkFUOEFmLy9aJyAvPgogICAgPC9zdmc+CiAg",
  },
  {
    id: "cKhiESZoLrbZZG0-Zc9pr",
    url: "https://i.ibb.co/Kbj76cj/kids-shoes3.jpg",
    alt: "shoes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBbkFBRUJBQUFBQUFBQUFBQUFBQUFBQUFBR0J3RUJBQUFBQUFBQUFBQUFBQUFBQUFBQUJQL2FBQXdEQVFBQ0VBTVFBQUFBTU9KVlNpTS8vOFFBSXhBQUFnRURCQUVGQUFBQUFBQUFBQUFBQVFNQ0FBUVJCUVlTTVNFbFFVSlNrLy9hQUFnQkFRQUJQd0RiU2s2bzNVcmE1ZnhjcGhaYnl4Z2t5aVY1NG5zZ2VhMHZUVVdTSmtKbXNRTThTWUk4K3ptUUVmdDdVRlI5TnV4a1BuZHdYSmdrUVRFZ1Z2V0FodHB3ajhXb3grZ3IvOFFBR0JFQkFRQURBQUFBQUFBQUFBQUFBQUFBQVFJQUEwSC8yZ0FJQVFJQkFUOEEyeVRaQjF6L3hBQVlFUUFDQXdBQUFBQUFBQUFBQUFBQUFBQUJBZ0FERXYvYUFBZ0JBd0VCUHdCSExWYU0vOWs9JyAvPgogICAgPC9zdmc+CiAg",
  },
];

// Data for the best sellers slider
export const sliderBestSellersData = [
  {
    id: "6feWW4n8JmLLc1ci6neMI",
    url: "https://i.ibb.co/k02pQ8M/slider1.jpg",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBb0FBRUJBUUFBQUFBQUFBQUFBQUFBQUFBRUFRVUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBVC8yZ0FNQXdFQUFoQURFQUFBQU1vZGNKLy94QUFqRUFBQkF3UUNBUVVBQUFBQUFBQUFBQUFDQVFNRUFBVVJFZ1loSWpFeVFWRmgvOW9BQ0FFQkFBRS9BT01SSTdsdG52bVBrekcyQlNEY2Q4WnJrRnRoREUzQTl5WlVGZFQyNFUvUk1mYWZLVnc5MXdvODF0U1hUUVN4K2w0clY4aU10Mm1NcWI1Y3RleHFwa1dWUnhPKzFyLy94QUFaRVFBQ0F3RUFBQUFBQUFBQUFBQUFBQUFCQWdBU0lUSC8yZ0FJQVFJQkFUOEFETGRWM2hNLy84UUFHaEVBQUFjQUFBQUFBQUFBQUFBQUFBQUFBQUVERVJJeFFmL2FBQWdCQXdFQlB3QlNUSFdELzlrPScgLz4KICAgIDwvc3ZnPgogIA==",
  },
  {
    id: "KxQtv0ZEBlTunyixldnQq",
    url: "https://i.ibb.co/H73Z8rT/slider7.jpg",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBa0FFQU1CSWdBQ0VRRURFUUgveEFBcEFBRUJBUUFBQUFBQUFBQUFBQUFBQUFBR0JBVUJBUUVBQUFBQUFBQUFBQUFBQUFBQUFBVUcvOW9BREFNQkFBSVFBeEFBQUFBOXRDNnk2SC8veEFBbEVBQUNBUUVGQ1FBQUFBQUFBQUFBQUFBQkFnTUFCQVVSTVVFU0V5SWtNak0wY2JILzJnQUlBUUVBQVQ4QXNsNjJnVGd1a2U1RXJiV2ZDaXJVVjZYYk8wdk5xRlhweFlZblhJNm1sN2IxSDQ4WHMvYS8vOFFBR2hFQUFnSURBQUFBQUFBQUFBQUFBQUFBQVFNQUFoRWpNZi9hQUFnQkFnRUJQd0F2ZGdiTGRuLy94QUFhRVFBQkJRRUFBQUFBQUFBQUFBQUFBQUFCQUFJREVSTXkvOW9BQ0FFREFRRS9BTVlTYXpiemEvL1onIC8+CiAgICA8L3N2Zz4KICA=",
  },
  {
    id: "3W_0bkUJ4jdF9PEdXKWqG",
    url: "https://i.ibb.co/0MZtHS6/slider2.jpg",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCUUFFQU1CSWdBQ0VRRURFUUgveEFBckFBQURBUUFBQUFBQUFBQUFBQUFBQUFBQUF3WUhBUUVCQVFBQUFBQUFBQUFBQUFBQUFBQUNBUVAvMmdBTUF3RUFBaEFERUFBQUFLeHVTcXdVMmtGZi84UUFKUkFBQVFNQ0JnRUZBQUFBQUFBQUFBQUFBUUlEQkFBRkVSSVRJU0p4UVNReFExRmgvOW9BQ0FFQkFBRS9BR2JvdzNMbDIxc3E5TEcxU3BZdzVLK09yVk5pcWRodHJqNUhIWXdjMk9aSVg1U1B2dWtYR1ViWUZHUXZWa3JkWmRXZVN0RUk4MGI5ZHNrWjFoOXhrb2pGbHBiWUFLVURjanJhaEpmMFN5Vmt0NWdvSk8rQi9EN2lsbkE5REFWLy84UUFHQkVCQUFNQkFBQUFBQUFBQUFBQUFBQUFBUUlRRVhILzJnQUlBUUlCQVQ4QXliaUhhLy9FQUJnUkFRQURBUUFBQUFBQUFBQUFBQUFBQUFFUUVTTngvOW9BQ0FFREFRRS9BTXl4ZVIvLzJRPT0nIC8+CiAgICA8L3N2Zz4KICA=",
  },
  {
    id: "rwihxHSfYlRFFjhQ74bA_",
    url: "https://i.ibb.co/7Xh7cNB/slider8.webp",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCZ0FFQU1CSWdBQ0VRRURFUUgveEFBdEFBQUNBd0VBQUFBQUFBQUFBQUFBQUFBQUJRSURCZ2NCQVFFQkFBQUFBQUFBQUFBQUFBQUFBQUlEQlAvYUFBd0RBUUFDRUFNUUFBQUE3cERLMUJzbHdhSS8vOFFBSUJBQUFnSUNBZ0lEQUFBQUFBQUFBQUFBQVFJREJBQVJFa0VGSVNJeFlmL2FBQWdCQVFBQlB3Q2FXT05XWjJDcUJza25RR0IxT2VTbXNTWHJVTUpiYjFsWGlGMTl0b01HeWpOY0ZpbVpuWWtWM0Rqa0NQYlpKREVaMG0xODBHZ2Z3OVlVVm5CYU4xMEFPdXMvLzhRQUdSRUFBZ01CQUFBQUFBQUFBQUFBQUFBQUFSSUFFVUZ4LzlvQUNBRUNBUUUvQUxMS3A3a0F1Zi9FQUJnUkFBTUJBUUFBQUFBQUFBQUFBQUFBQUFBQkVSSngvOW9BQ0FFREFRRS9BSXMzUzRVLy85az0nIC8+CiAgICA8L3N2Zz4KICA=",
  },
  {
    id: "_5EW_EWkcauFH55UstQro",
    url: "https://i.ibb.co/VmDmvmd/slider3.jpg",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBcEFBRUJBUUFBQUFBQUFBQUFBQUFBQUFBREFRSUJBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUIvOW9BREFNQkFBSVFBeEFBQUFEVko2Ly94QUFqRUFBQ0FRTURCQU1BQUFBQUFBQUFBQUFCQWdNQUJBVVJJVEVTRkNJak1rTEIvOW9BQ0FFQkFBRS9BTTVPK0xtbFZubGk4ekdYK29aRjEyNDFCcnVnMDBpVytUdVhSRURzMGk3Z0hpc25OSTFsS3pOcWV2OEFXcU8wdHhjU2V2NUtoTzU1SzEvL3hBQVlFUUVCQUFNQUFBQUFBQUFBQUFBQUFBQUNBUUFERWYvYUFBZ0JBZ0VCUHdCN0VyV3JlNS8veEFBWUVRRUJBQU1BQUFBQUFBQUFBQUFBQUFBQ0FRQVJJZi9hQUFnQkF3RUJQd0FBbVF5YzFuLy8yUT09JyAvPgogICAgPC9zdmc+CiAg",
  },
  {
    id: "2Ywaf7te5iBSwE6spGnGA",
    url: "https://i.ibb.co/vHgK7fF/slider12.jpg",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBcEFBRUJBUUFBQUFBQUFBQUFBQUFBQUFBRkJBWUJBUUVBQUFBQUFBQUFBQUFBQUFBQUFBRUMvOW9BREFNQkFBSVFBeEFBQUFCZWZHcWxmLy9FQUNJUUFBSUNBUVFCQlFBQUFBQUFBQUFBQUFFQ0F3UVNBQVVSSWlFVEZYS1J3Zi9hQUFnQkFRQUJQd0N2dU05SzljUnpHQ3dpUGxjajBYQThBYXYzWnR6a1QxSkkzbEU2QkNFeEFMSEh4cmMyYUs5dUxSbkVyRldRZkZ6MisrZFFJbnQ5dTNncG5pbGh3a0k3RHJ6KzYvL0VBQmdSQVFBREFRQUFBQUFBQUFBQUFBQUFBQUlBQVRFUy85b0FDQUVDQVFFL0FGU0p0OWJlVC8vRUFCa1JBQUlEQVFBQUFBQUFBQUFBQUFBQUFBRVJBQklUSWYvYUFBZ0JBd0VCUHdBNXBWNkEzUC9aJyAvPgogICAgPC9zdmc+CiAg",
  },
];

export const sliderBestRatedData = [
  {
    id: "edmAS21QXTTu346gEhyAP",
    url: "https://i.ibb.co/tK63JgY/slider4.jpg",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBb0FBRUJBUUFBQUFBQUFBQUFBQUFBQUFBR0JBVUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBWC8yZ0FNQXdFQUFoQURFQUFBQUp0UUF4SVgvOFFBSlJBQUFnSUJBZ1FIQUFBQUFBQUFBQUFBQVFJREJSRUFCQVlTRkdFaEl5VXpRVkt4LzlvQUNBRUJBQUUvQUxHNDRtMnRyUE1FZm9qT0VBREFlV3YxL2M2UEUxbk5ZMDBLcExFb01YVmxzY3VIQlhCNzgycDdEZXlDeFI5dzdLSU4wUUQ4RmNqVVo5TnFCNGUvQW5mQUkxLy94QUFiRVFBREFBSURBQUFBQUFBQUFBQUFBQUFCQWdNQUVRUVRJdi9hQUFnQkFnRUJQd0MxcjhmcEZWUm1lbXZKSUdzLy84UUFHaEVBQWdJREFBQUFBQUFBQUFBQUFBQUFBUU1DRWdBUlFmL2FBQWdCQXdFQlB3QmFrdXZTd2pFZEEzbi8yUT09JyAvPgogICAgPC9zdmc+CiAg",
  },
  {
    id: "8IIxUT7nnNoqVRPs8P3om",
    url: "https://i.ibb.co/GVtq4Yy/slider5.webp",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBbUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBR0FRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FEQU1CQUFJUUF4QUFBQUF5ck5wei84UUFKUkFBQWdFREF3SUhBQUFBQUFBQUFBQUFBUUlEQUFRUkJSSWhCaE1VSWtGUmNYS1MvOW9BQ0FFQkFBRS9BTEtSWldLNUE4NVUvSG9hS0VOYitIUU9IRzZUbkd4Um5rZTlkTTJsdGM2NWV4VFJoMFNLTmxYN25tcjlSRHFFeXg1VWRsaitzWnIveEFBWEVRQURBUUFBQUFBQUFBQUFBQUFBQUFBQUFSRVMvOW9BQ0FFQ0FRRS9BSzluLzhRQUZoRUFBd0FBQUFBQUFBQUFBQUFBQUFBQUFCRWkvOW9BQ0FFREFRRS9BRkIvLzlrPScgLz4KICAgIDwvc3ZnPgogIA==",
  },
  {
    id: "ILEHHlHRvhKefZYMRDGNi",
    url: "https://i.ibb.co/RBJz4R8/slider10.jpg",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBb0FBRUJBQUFBQUFBQUFBQUFBQUFBQUFBR0J3RUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFRTC8yZ0FNQXdFQUFoQURFQUFBQURUS1hMU3YvOFFBSkJBQUFnRURBd01GQUFBQUFBQUFBQUFBQVFJREFBVVJCQkloQmhNVUlqTnhrWkwvMmdBSUFRRUFBVDhBdFUrcWhkem81Y1N5SUVERUVxUStmc2dDdEgxQko0MFVUdHVDc0g5UEIyRGdxZmsxYTVKQmVMSmgyOTRpcktxZ1R0dEdlNWo5U2MxLy84UUFHUkVBQVFVQUFBQUFBQUFBQUFBQUFBQUFBUUFERVRHQi85b0FDQUVDQVFFL0FHeFJuRi8veEFBWEVRRUJBUUVBQUFBQUFBQUFBQUFBQUFBQkFoRUEvOW9BQ0FFREFRRS9BS1pNR0IwTy85az0nIC8+CiAgICA8L3N2Zz4KICA=",
  },
  {
    id: "AQ3xgPJaqiglZka1R7hjY",
    url: "https://i.ibb.co/4WQHkBN/slider11.jpg",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBc0FFQU1CSWdBQ0VRRURFUUgveEFBb0FBRUJBUUFBQUFBQUFBQUFBQUFBQUFBQ0JBY0JBUUFBQUFBQUFBQUFBQUFBQUFBQUFBSC8yZ0FNQXdFQUFoQURFQUFBQU5VTUlYLy94QUFoRUFBQ0FnSUNBUVVBQUFBQUFBQUFBQUFDQXdFUkFBUUZFbE1pTVRPQnN2L2FBQWdCQVFBQlB3RGY1cHV2dE9XS3lrRlFzNW9iN3dVMFVSbWx6VFh2RlJKcTJNQzc4Y2UrY3VaVWllMC9JSDZqRStnNGtmSTB2dWMvLzhRQUdSRUJBQUlEQUFBQUFBQUFBQUFBQUFBQUFRQUNFUkpDLzlvQUNBRUNBUUUvQUNqcmxlcC8vOFFBR1JFQUFnTUJBQUFBQUFBQUFBQUFBQUFBQVJJQUFoRkMvOW9BQ0FFREFRRS9BSEdxSzh6LzJRPT0nIC8+CiAgICA8L3N2Zz4KICA=",
  },
  {
    id: "65RLMxxnEwFtk2Z7RF_Tt",
    url: "https://i.ibb.co/DGnfBPg/slider9.webp",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCZ0FFQU1CSWdBQ0VRRURFUUgveEFBc0FBQUNBd0FBQUFBQUFBQUFBQUFBQUFBQUJnRUZCd0VCQVFFQUFBQUFBQUFBQUFBQUFBQUFCQUVDLzlvQURBTUJBQUlRQXhBQUFBQmtjOHhiUXBtMERNLy94QUFrRUFBQ0FRTUNCZ01BQUFBQUFBQUFBQUFCQWdNRUJSRUFRUVlTRXlFeGdSUWlRdi9hQUFnQkFRQUJQd0M1Y1VDaHJ1V1dQRk1wUlhibFptKy82R05sMVlLMkM0eFBLRmRIUTRlTi9LbjEyT3Zqdk5XWEZKb3hMQUZLOU5qdS9ZK3NhNFRvVnRkVlZLa29aWjVwV0lVN0RUVUlqdTlhUXhLWVlnWXdXWU1OV1czaFpJNndPUy9WZFhHZkFjWjEvOFFBSEJFQUFnSUNBd0FBQUFBQUFBQUFBQUFBQVFJQUVRTVNNbkdSLzlvQUNBRUNBUUUvQUZ6c1dOOFErdnNBRzdMUW90WjdGR2YveEFBYUVRQURBQU1CQUFBQUFBQUFBQUFBQUFBQkFnTUFFUkpSLzlvQUNBRURBUUUvQUxTbkpvemJZZWt1MXlpQ3BsWnlTODA1UStBN0dmL1onIC8+CiAgICA8L3N2Zz4KICA=",
  },
  {
    id: "RM-q1ihgi8o72uKkR0UIh",
    url: "https://i.ibb.co/fnBK2Fp/slider6.webp",
    alt: "clothes",
    blurHash:
      "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCZ0FFQU1CSWdBQ0VRRURFUUgveEFBcEFBQURBUUFBQUFBQUFBQUFBQUFBQUFBQUJRWUVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUMvOW9BREFNQkFBSVFBeEFBQUFDM3lPMVFUeWJCai8vRUFDSVFBQUlDQWdFRUF3RUFBQUFBQUFBQUFBRUNBeElBRVFRaElrRnhNVEpSY3YvYUFBZ0JBUUFCUHdBd1JyOW1VZENlcDhESkVoTXJRcTZtUlVWeXZtcmJBUG82emtwSEpHRUtBMlZ3ZlJ4WVlPTEZxRmkyNjJMR3hCcnVvL0JsQ080SDRHSGlUTEtaR3NPMmxMN1grcy8veEFBWUVRQURBUUVBQUFBQUFBQUFBQUFBQUFBQUFSRVNJZi9hQUFnQkFnRUJQd0RUc2cxMC84UUFGeEVBQXdFQUFBQUFBQUFBQUFBQUFBQUFBQUVTSWYvYUFBZ0JBd0VCUHdDVkluaC8vOWs9JyAvPgogICAgPC9zdmc+CiAg",
  },
];