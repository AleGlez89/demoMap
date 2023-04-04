import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { clientsI } from 'src/app/modules/data-transfer/model/clients.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { usersI } from './models/users.interface';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private pathVersion = '/v1';
  private pathUsers = '/users';
  private pathProducts = '/products';
  private pathCategories= '/categories';

  constructor(
    private http: HttpClient
  ) {}

  public getClient(): BehaviorSubject<clientsI[]> {
    const allClients$: BehaviorSubject<clientsI[]> = new BehaviorSubject<clientsI[]>([]);    
    allClients$.next(this.test())
    return  allClients$;
  }

  public test(): clientsI[] {
    const clients: clientsI[] = ([
      {id: "1", codeGlobalClient: "BKBCN",  name: 'Buguer 1', direccion: "Pl. de Lesseps, 3, 08023 Barcelona", coordinates : {latitude: 41.408453648201096  , longitude: 2.1504819075946084 }, devices: {devices: [], count: 1 }},
      {id: "2", codeGlobalClient: "BKBCN", name: 'Buguer 2', coordinates : {latitude: -33.718234 , longitude: 150.363181 }, devices: {devices: [], count: 2 }},
      {id: "3", codeGlobalClient: "BKBCN", name: 'Buguer 3', coordinates : {latitude: -33.727111 , longitude: 150.371124 }, devices: {devices: [], count: 3 }},
      {id: "4", codeGlobalClient: "BKBCN", name: 'Buguer 4', coordinates : {latitude: -33.848588 , longitude: 151.209834 }, devices: {devices: [], count: 4 }},
      {id: "5", codeGlobalClient: "BKBCN", name: 'Buguer 5', coordinates : {latitude: -33.851702 , longitude: 151.216968 }, devices: {devices: [], count: 5 }},
      {id: "15", codeGlobalClient: "MACDBCN", name:' Burguer 6', coordinates: { latitude: -33.718234, longitude: 150.363181 }, devices: {devices: [], count: 6 }},
      {id: "16", codeGlobalClient: "MACDBCN", name:' Burguer 7', coordinates: { latitude: -33.727111, longitude: 150.371124 }, devices: {devices: [], count: 7 }},
      {id: "17", codeGlobalClient: "MACDBCN", name:' Burguer 8', coordinates: { latitude: -33.848588, longitude: 151.209834 }, devices: {devices: [], count: 7 }},
      {id: "18", codeGlobalClient: "MACDBCN", name:' Burguer 9', coordinates: { latitude: -33.851702, longitude: 151.216968 }, devices: {devices: [], count: 8 }},
      {id: "19", codeGlobalClient: "MACDBCN", name:' Burguer 10', coordinates: { latitude: -34.671264, longitude: 150.863657 }, devices: {devices: [], count: 123 }},
      {id: "10", name:' Burguer 11', coordinates: { latitude: -35.304724, longitude: 148.662905 }, devices: {devices: [], count: 164 }},
      {id: "20", name:' Burguer 12', coordinates: { latitude: -36.817685, longitude: 175.699196 }, devices: {devices: [], count: 15 }},
      {id: "21", name:' Burguer 13', coordinates: { latitude: -36.828611, longitude: 175.790222 }, devices: {devices: [], count: 145 }},
      {id: "132", name:' Burguer 14', coordinates: { latitude: -37.75, longitude: 145.116667 }, devices: {devices: [], count: 1 }},
      {id: "143", name:' Burguer 15', coordinates: { latitude: -37.759859, longitude: 145.128708 }, devices: {devices: [], count: 13 }},
      {id: "154", name:' Burguer 16', coordinates: { latitude: -37.765015, longitude: 145.133858 }, devices: {devices: [], count: 12 }},
      {id: "1656", name:' Burguer X', coordinates: { latitude: -37.770104, longitude: 145.143299 }, devices: {devices: [], count: 14 }},
      {id: "17676", name:' Burguer X', coordinates: { latitude: -37.7737, longitude: 145.145187 }, devices: {devices: [], count: 111 }},
      {id: "1878", name:' Burguer X', coordinates: { latitude: -37.774785, longitude: 145.137978 }, devices: {devices: [], count: 14 }},
      {id: "176764", name:' Burguer X', coordinates: { latitude: -37.819616, longitude: 144.968119 }, devices: {devices: [], count: 112 }},
      {id: "1865586", name:' Burguer X', coordinates: { latitude: -38.330766, longitude: 144.695692 }, devices: {devices: [], count: 13 }},
      {id: "186586", name:' Burguer X', coordinates: { latitude: -39.927193, longitude: 175.053218 }, devices: {devices: [], count: 1 }},
      {id: "186686", name:' Burguer X', coordinates: { latitude: -41.330162, longitude: 174.865694 }, devices: {devices: [], count: 12 }},
      {id: "454", name:' Burguer X', coordinates: { latitude: -42.734358, longitude: 147.439506 }, devices: {devices: [], count: 12 }},
      {id: "98", name:' Burguer X', coordinates: { latitude: -42.734358, longitude: 147.501315 }, devices: {devices: [], count: 14 }},
      {id: "1654", name:' Burguer X', coordinates: { latitude: -42.735258, longitude: 147.438 }, devices: {devices: [], count: 1 }},
      {id: "4323543561", name:' Burguer X', coordinates: { latitude: -43.999792, longitude: 170.463352 }, devices: {devices: [], count: 1 }},
      {id: "15687", name:' Burguer X', coordinates: { latitude: 40.463667, longitude: -3.74922 }, devices: {devices: [], count: 1 }},
      {id: "1124325", name:' Burguer X', coordinates: { latitude: 48.8534000, longitude: 2.3486000 }, devices: {devices: [], count: 1 }, renovation: true},
      {id: "13445645", name:' Burguer X', coordinates: { latitude: 39.5000000, longitude: -0.7500000 }, devices: {devices: [], count: 1 }},
      {id: "14564565", name:' Burguer X', coordinates: { latitude: 37.3828300, longitude: -5.9731700 }, devices: {devices: [], count:222 }},
      {id: "1435465", name:' Burguer X', coordinates: { latitude: 41.38879, longitude: 2.15899}, devices: {devices: [], count: 14 }},
      {id: "1112231", name:' Burguer X', coordinates: { latitude: 41.51609, longitude: 1.902142}, devices: {devices: [], count: 14 }},
      {id: "132321321", name:' Burguer X', coordinates: { latitude:41.73976,	longitude: 1.629385}, devices: {devices: [], count: 1 }},
      {id: "1557678", name:' Burguer X', coordinates: { latitude:41.76884, longitude:	2.250261}, devices: {devices: [], count: 41 }},
      {id: "1656576", name:' Burguer X', coordinates: { latitude:41.49395, longitude:	2.295461}, devices: {devices: [], count: 1 }},
      {id: "68787871", name:' Burguer X', coordinates: { latitude:42.1201, longitude:	2.101363}, devices: {devices: [], count: 41 } , renovation: true},
      {id: "8787871", name:' Burguer X', coordinates: { latitude: 41.66976, longitude:	2.261185}, devices: {devices: [], count: 1 }},
      {id: "87987871", name:' Burguer X', coordinates: { latitude:41.57944, longitude:	2.55148}, devices: {devices: [], count: 1 }},
      {id: "766451", name:' Burguer X', coordinates: { latitude:41.61026, longitude:	2.541376}, devices: {devices: [], count: 41 }},
      {id: "123445661", name:' Burguer X', coordinates: { latitude:41.59967, longitude:	1.44341}, devices: {devices: [], count: 1 }},
      {id: "789056561", name:' Burguer X', coordinates: { latitude:41.55555, longitude:	2.400564}, devices: {devices: [], count: 1 }},
      {id: "00000876551", name:' Burguer X', coordinates: { latitude:41.79839, longitude:	1.954726}, devices: {devices: [], count: 1 }}
  
    ]);

  const newClientSelected: any [] = [
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-041",
    Descripción: "B.K. 17793 - BCN URQUINAONA",
    Contrato: "EF/MTO/BKQ-41; RA/PCI/MTO/BKQ-41",
    Dirección: "Plaça Urquinaona, 11",
    Provincia: "Barcelona",
    Localidad: "Barcelona",
    CodPostal: "08010",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.38862851475144, 
    longitude: 2.173211499895284
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-046",
    Descripción: "B.K. 18527 - BARCELONA - C. ARAGÓN, 259",
    Contrato: "PF/MTO/BKQ-57; JO/PCI/MTO/BKQ-57",
    Dirección: "Aragón, 259",
    Provincia: "BARCELONA",
    Localidad: "BARCELONA",
    CodPostal: "08007",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.3920200555991,
    longitude: 2.164029898049036
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-047",
    Descripción: "B.K. 14932 - C.C. L'ILLA DIAGONAL",
    Contrato: "JO/MTO/BKQ-76; latitudelatitude/PCI/MTO/BKQ-76",
    Dirección: "Av. Diagonal, 577",
    Provincia: "BARCELONA",
    Localidad: "BARCELONA",
    CodPostal: "08005",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.38926150500142,
    longitude: 2.1338313676508056
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-051",
    Descripción: "B.K. 18240 - HOSPITALET - AVINGUDA CARRILET",
    Contrato: "SA/MTO/BKQ-51; JO/PCI/MTO-51",
    Dirección: "Avinguda Carrilet, 359-361",
    Provincia: "Barcelona",
    Localidad: "Hospitalet de Llobregat",
    CodPostal: "08907",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.36010970506297, 
    longitude: 2.097800718270782
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-070",
    Descripción: "B.K. 18841 - BCN JOAN DE BORBÓ",
    Contrato: "PF/MTO/BKQ-61; ;JO/PCI/MTO/BKQ-61",
    Dirección: "Paseo Juan de Borbón, 2",
    Provincia: "Barcelona",
    Localidad: "Barcelona",
    CodPostal: "08003",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.38156468010785,
    longitude: 2.1870933845543505
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-091",
    Descripción: "B.K. 14413 - GRAN VIA 2",
    Contrato: "JO/MTO/BQK-67; JO/PCI/MTO/BKQ-67",
    Dirección: "Gran Vía. 76-97 - C.C. Gran Vía 2",
    Provincia: "BARCELONA",
    Localidad: "HOSPITALET DE LLOBREGAT",
    CodPostal: "08908",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.35863641317323, 
    longitude: 2.1296483702883653
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-092",
    Descripción: "B.K. 9090 - C.C. LAS GLORIAS",
    Contrato: "JO/MTO/BKQ-75; JO/PCI/MTO/BKQ-75",
    Dirección: "Av. Diagonal, 208 - C.C. Glorias",
    Provincia: "BARCELONA",
    Localidad: "BARCELONA",
    CodPostal: "08005",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.40529088619775,
    longitude: 2.191933172906783
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-098",
    Descripción: "B.K. 6868 - CONCHA ESPINA",
    Contrato: "JO/MTO/BKQ-145",
    Dirección: "Av. Concha Espina, 10",
    Provincia: "MADRID",
    Localidad: "MADRID",
    CodPostal: "28016",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.45192191082434,
    longitude: -3.6874216731367344
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-104",
    Descripción: "B.K. 17559 - BARCELONA PORT OLÍMPIC",
    Contrato: "SA/MTO/BKQ-104; JO/PCI/MTO/BKQ-104",
    Dirección: "Puerto Olímpico, Local 7",
    Provincia: "Barcelona",
    Localidad: "Barcelona",
    CodPostal: "08003",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.38776676483958,
    longitude: 2.197911869213742
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-610",
    Descripción: "B.K. 6537 - BRESCIA",
    Dirección: "Avenida Brasilia, 7",
    Provincia: "Madrid",
    Localidad: "Madrid",
    CodPostal: "28028",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.43653599725416,
    longitude: -3.6614218308074524 
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-129",
    Descripción: "B.K. 15350 - BARAJAS",
    Contrato: "JO/MTO/BKQ-211; JO/PCI/MTO/BKQ-211",
    Dirección: "Avenida de Logroño, 337",
    Provincia: "MADRID",
    Localidad: "MADRID",
    CodPostal: "28042",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.47355125532081,
    longitude: -3.582429288477018
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-138",
    Descripción: "B.K. 18519 - ATOCHA",
    Contrato: "JO/MTO/BKQ-140; JO/PCI/MTO/BKQ-140",
    Dirección: "Calle Atocha, 51",
    Provincia: "Madrid",
    Localidad: "Madrid",
    CodPostal: "28012",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.41319916243134,
    longitude: -3.700288373137579
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-139",
    Descripción: "B.K. 7207 - BRAVO MURILLO, 377",
    Contrato: "JO/MTO/BKQ-92; latitudelatitude/PCI/MTO/BKQ-92",
    Dirección: "Bravo Murillo, 377",
    Provincia: "Madrid",
    Localidad: "Madrid",
    CodPostal: "28020",
    Área: "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.465900340582216,
    longitude: -3.6908439577956718
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-140",
    Descripción: "B.K. 20363 - BRAVO MURILLO, 119",
    Contrato: "JO/MTO/BKQ-107; JO/PCI/MTO/BKQ-107",
    Dirección: "Calle Bravo Murillo, 119",
    Provincia: "Madrid",
    Localidad: "Madrid",
    CodPostal: "28020",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.4490146044351,
    longitude: -3.703958030807171
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-168",
    Descripción: "B.K. 5130 - GOYA",
    Contrato: "JO/MTO/BKQ-152; JO/PCI/MTO/BKQ-152",
    Dirección: "Goya, 54 bj.",
    Provincia: "MADRID",
    Localidad: "MADRID",
    CodPostal: "28001",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.42480526258998,
    longitude: -3.6782188731373266 
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-169",
    Descripción: "B.K. 21510 - GENERAL RICARDOS",
    Contrato: "JO/MTO/BKQ-151; JO/PCI/MTO/BKQ-151",
    Dirección: "General Ricardos, 89",
    Provincia: "MADRID",
    Localidad: "MADRID",
    CodPostal: "28019",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.39360161863363,
    longitude: -3.7232077866324444
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-171",
    Descripción: "B.K. 10651 - ESPERANZA",
    Contrato: "JO/MTO/BKQ-149; JO/PCI/MTO/BKQ-149",
    Dirección: "Pseo. Esperanza, 21",
    Provincia: "MADRID",
    Localidad: "MADRID",
    CodPostal: "28005",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.40118990389843,
    longitude: -3.704322988478596
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-176",
    Descripción: "B.K. 13590 - BRAVO MURILLO, 222",
    Contrato: "JO/MTO/BKQ-143; RA/PCI/MTO/BKQ-143",
    Dirección: "Bravo Murillo, 222",
    Provincia: "MADRID",
    Localidad: "MADRID",
    CodPostal: "28020",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 40.458009083670895,
    longitude: -3.7008845154662304
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-180",
    Descripción: "B.K. 21519 - CASTELLDEFELS",
    Contrato: "JO/MTO/BKQ-136; JO/PCI/MTO/BKQ-136",
    Dirección: "Galileu / Rda. Can Rabadà",
    Provincia: "BARCELONA",
    Localidad: "CASTELLDEFELS",
    CodPostal: "08860",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.28223270032569, 
    longitude: 1.9890880403761824
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-181",
    Descripción: "B.K. 21260 - BARCELONA CALLE TARRAGONA, 108",
    Contrato: "JO/MTO/BKQ-; JO/PCI/MTO/BKQ-135",
    Dirección: "Tarragona, 108",
    Provincia: "BARCELONA",
    Localidad: "BARCELONA",
    CodPostal: "08015",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.38000583440986,
    longitude: 2.1439785268839757
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-196",
    Descripción: "B.K. 23398 - BCN ZONA FRANCA",
    Contrato: "MTO-13-01-005",
    Dirección: "Paseo de la Zona Franca, 137-139",
    Provincia: "Barcelona",
    Localidad: "Barcelona",
    CodPostal: "08038",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.35835320992192,
    longitude: 2.140105113389044
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: 1,
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-247",
    Descripción: "B.K. 25025 - VIRREI AMAT",
    Contrato: "latitudelatitude/PCI/MTO/BKQ-250",
    Dirección: "Plaza Virrei Amat, 6",
    Provincia: "BARCELONA",
    Localidad: "BARCELONA",
    CodPostal: 8031,
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.43030959441788,
    longitude: 2.174246756442203
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-259",
    Descripción: "B.K. 23399 - BCN SARRIA",
    Contrato: "JO/PCI/MTO/BKQ-261",
    Dirección: "Avenida de Sarrià, 9",
    Provincia: "BARCELONA",
    Localidad: "BARCELONA",
    CodPostal: "08029",
    "Área": "0001 - Zona de Cataluña",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.390005804143016,
    longitude: 2.1473896575656792
    }    ,
    devices: {devices: [], count: 1 }    
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-454",
    Descripción: "B.K. 18781 - HISPANIDAD",
    Contrato: "MTO/BKQ-480",
    Dirección: "Vía Hispanidad, 15",
    Provincia: "Zaragoza",
    Localidad: "Zaragoza",
    CodPostal: "50009",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.633524018415564,
    longitude: -0.908739501945521
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-320",
    Descripción: "B.K. 25018 - FEDERACION",
    Contrato: "JO/MTO/BKQ-362; JO/PCI/MTO/BKQ-362",
    Dirección: "Calle Francisco Buendia, 2",
    Provincia: "Sevilla",
    Localidad: "Sevilla",
    CodPostal: "41005",
    "Área": "0005 - Zona de Andalucía",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 37.376758866746286,
    longitude: -5.962072644366662
    },
    devices: {devices: [], count: 0}
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-363",
    Descripción: "B.K. 26732 - AVENIDA DE BURGOS FS",
    Contrato: "MTO/BKQ-383; PCI/MTO/BKQ-383",
    Dirección: "Avenida de Burgos, 25",
    Provincia: "Valladolid",
    Localidad: "Valladolid",
    CodPostal: "47009",
    "Área": "0002 - Zona de Madrid",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 41.666652946883566,
    longitude: -4.729582031350133
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-048",
    Descripción: "B.K. 15053 - AVENIDA DEL PUERTO",
    Contrato: "VG/MTO/BKQ-48; JO/PCI/MTO/BKQ-48",
    Dirección: "Avenida del Puerto, 177",
    Provincia: "Valencia",
    Localidad: "Valencia",
    CodPostal: "46022",
    "Área": "0006 - Zona de Levante",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 39.46341518850657,
    longitude:  -0.34315251733417496 
    },
    devices: {devices: [], count: 0 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-348",
    Descripción: "B.K. 26288 - VAL PASEO NEPTUNO",
    Contrato: "MTO/BKQ-375; PCI/MTO/BKQ-375",
    Dirección: "Passeig de Neptú, 50",
    Provincia: "Valencia",
    Localidad: "Valencia",
    CodPostal: "46011",
    "Área": "0006 - Zona de Levante",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 39.4650184012968, 
    longitude: -0.3236480210267883 
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-308",
    Descripción: "B.K. 23586 - NEVADA CC",
    Contrato: "JO/MTO/BKQ-328; JO/PCI/MTO/BKQ-328",
    Dirección: "Calle Hipócrates, s/n - Centro Comercial Nevada",
    Provincia: "GRANADA",
    Localidad: "ARMILLA",
    CodPostal: "18100",
    Area: "0005 - Zona de Andalucía",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 37.14543863659586, 
    longitude: -3.615168786700957
    },
    devices: {devices: [], count: 1 }
    },
    {
    CodCliente: "00001",
    Cliente: "BURGER KING SPAIN, S.L.U.",
    CIFCliente: "B03093093",
    Codigo: "00001-471",
    Descripción: "B.K. 21560 - BERCEO",
    Contrato: "TG/PCI/MTO/BKQ-486",
    Dirección: "Lérida, 2, Centro Comercial Berceo",
    Provincia: "Logroño",
    Localidad: "Berceo",
    CodPostal: "26006",
    GrupTecnico: "GRUPO PCI",
    coordinates: {
    latitude: 42.462404111180604,
    longitude: -2.421873801926528
    },
    devices: {devices: [], count: 0 }   
    },
  ]

 
    console.log(newClientSelected.length)

    newClientSelected.map((client: clientsI)=>{
      client.renovation 
      ? client.url = "../../../../../assets/img/2875387_2.png"
      : client.url = "../../../../../assets/img/redicon.png"
    })

    return newClientSelected;
  }

  public getUsers(): Observable<usersI[]> {
    return this.http.get<usersI[]>(
      environment.externalServiceProvider 
      + this.pathVersion + this.pathUsers
    );
  }
}