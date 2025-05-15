
export interface cardDetails {
    title: string,
    details: string,
    img: string
}

export interface ICard {
    heading: string
    safety: cardDetails
    hazardousManagment: cardDetails
    wellness: cardDetails
    EmergencyResponse?: cardDetails
}