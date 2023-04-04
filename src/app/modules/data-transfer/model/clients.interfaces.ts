export interface clientsI {
    id: string,
    url?: string,
    name: string,
    codeGlobalClient?: string,
    direccion?: string,
    coordinates: geolocationI,
    devices: devicesI,
    services?: servicesI,
    renovation?: true,
    Codigo?: string
}

export interface propertyMapI {
    title: string,
    coordinates: geolocationI,
    zoom: number
}

interface geolocationI {
    latitude: number,
    longitude: number
}
interface devicesI {
    count: number,
    devices: string []
}
interface servicesI {
    type: string
    date: Date,
    price: number
}

export const clientMarkerEmpty: clientsI = {
    id: 'null',
    url: '',
    name: 'null',
    coordinates: {
        latitude: 0,
        longitude: 0
    },
    devices: {
        count: 0,
        devices:[]
    }
} 

export interface ManciventClientI {
    CodCliente: string
    Cliente: string
    CIFCliente: string
    Codigo: string
    Descripción: string
    Contrato: string
    Dirección: string
    Provincia: string
    Localidad: string
    CodPostal: string
    Área: string
    GrupTecnico: string
}