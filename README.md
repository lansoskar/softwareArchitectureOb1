# softwareArchitectureOb1

**<h3><span style="color:red;"> Øvelse 2 - create folder </span></h1>**
<h4>Endpoint: https://api.dropboxapi.com/2/files/create_folder_v2 </h4>
Body: 
{ "autorename": false, "path": "/testCreateFolder" }  
  
Jeg brugte POST i min postman forespørgsel da vi skal write noget data til Dropbox. I min response har jeg fået statuskode 200(ok) og metadata tilbage på den oprettede folder.  

Jeg ville sigde at indtil videre, så vidt jeg ved, følger API'en uniform interface da hvad jeg har set af dokumentationen indtil videre giver en standariseret måde at bruge CRUD operationer og en dybdegående men nem dokumentation at skue over.    

**<h3><span style="color:red;"> Øvelse 3 - hent mappe detaljer </span></h1>**
<h4>Endpoint: https://api.dropboxapi.com/2/files/get_metadata </h4>
Body: 
{
"include_deleted": false,
"include_has_explicit_shared_members": false,
"include_media_info": false,
"path": "/testcreatefolder"
}
  
Den her tog mig lidt længere tid fordi jeg skimmede for hurtigt igennem dokumentationen. Jeg tænkte at jeg skulle bruge GET, da vi skal se og læse noget data, men det gav mig bare 404(not found). Efter at så kigge dokumentationen igennem igen og se at det står ligefrem på første linje at de gerne vil have at man bruge POST request med JSON argumenter og responses.  
  
man kan så sigde at det ville kunne forbedres i forhold til uniform interface at bruge korrekte CRUD typer til forventede operationer.
  
I min respons får jeg 200(ok) metadata tilbage om folderen på den path eller id specificeret såsom; tag, name, id, path display og lower path.  

**<h3><span style="color:red;"> Øvelse 4 - upload en fil </span></h1>**
<h4>Endpoint: https://content.dropboxapi.com/2/files/upload </h4>
Body: {
"autorename": false,
"mode": "add",
"mute": false,
"path": "/testCreateFolder/testCreateDocument.txt",
"strict_conflict": false
}  
  
Her uploader / laver vi en fil jeg kalder testCreateDocument til vores testfolder, det tog lidt længere tid end forventet da eksemplet givet i dokumentation forvirrede mig en smule, man skal ændre i headeren og essentielt  tilføje body af ens request der.
  
respons: 200(ok) {
"name": "testCreateDocument.txt",
"path_lower": "/testcreatefolder/testcreatedocument.txt",
"path_display": "/testCreateFolder/testCreateDocument.txt",
"id": "id:-QeIUKbYqoAAAAAAAAAADA",
"client_modified": "2023-09-06T08:27:14Z",
"server_modified": "2023-09-06T08:27:14Z",
"rev": "604ac82b9d495345fb78d",
"size": 151,
"is_downloadable": true,
"content_hash": "6d74a1ad3d86361476ea04777085a8fd9a2d44b6cfb453a0f9c5d7eb861e817c"
}


**<h3><span style="color:red;"> Øvelse 5 - slet en fil </span></h1>**
<h4>Endpoint: https://api.dropboxapi.com/2/files/delete_v2 </h4>
  
Body: {
"path": "/testCreateFolder/testCreateDocument.txt"
}  
  
meget simpelt, giv path til hvad der skal slettes, respons er 200(ok) og metadata på slettede emne, samt at hvis jeg kigger i filen slettede fra folderen  i min dropbox


**<h3><span style="color:red;"> Øvelse 7(6?) - søg efter filer </span></h1>**
<h4>Endpoint: https://api.dropboxapi.com/2/files/search_v2 </h4>  
  
Body: {
"match_field_options": {
"include_highlights": false
},
"options": {
"file_status": "active",
"filename_only": false,
"max_results": 20,
"path": ""
},
"query": "test"
}  
  
Her søger efter query test og path er tom("") så den tager det fra root folder. Før jeg kørte den her søg genlavede jeg den testfil jeg slettede i opg 5. Jeg får respons med 200(ok) og en liste med matches der indeholder test samt metadata på dem  

**<h3><span style="color:red;"> Øvelse 8 - flyt en fil </span></h1>**
<h4>Endpoint: https://api.dropboxapi.com/2/files/move_v2 </h4>  
  
Body: {
"allow_ownership_transfer": false,
"allow_shared_folder": false,
"autorename": false,
"from_path": "/testCreateFolder/testCreateDocument.txt",
"to_path": "/hemmeligeKoder/testCreateDocument.txt"
}  
  
Her laver vi et request om at rykke en specifik fil fra et path til et andet, her ville jeg sigde at dokumentationen fuldkommen fejler ellers så forstår jeg den bare ikke da der bare er konflikter, ikke særligt restfull i mine øjne. Med det jeg kom frem til i body får 200(ok) i min respons og metadata på filen der er blevet flyttet 

**<h3><span style="color:red;"> Øvelse 9 - kopier en fil </span></h1>**
<h4>Endpoint: https://api.dropboxapi.com/2/files/copy_v2 </h4>  

Body: {
"allow_ownership_transfer": false,
"allow_shared_folder": false,
"autorename": false,
"from_path": "/hemmeligeKoder/testCreateDocument.txt",
"to_path": "/testCreateFolder/testCreateDocument.txt"
}  
  
Her kopier vi filen tilbage fra opgave 8 så den er i begge foldere. Den har essentielt samme body som move_v2 endpointet med foldere skiftet da der ikke var noget i testCreateFolder da vi havde flyttet den ud. respons er 200(ok) og metadata på elementet der er blevet kopieret til CreateTestFolder  

**<h3><span style="color:red;"> Øvelse 11 - generelle tanker </span></h1>**  
  
Jeg ville sigde for det meste er API restfull, selvom der er få ting der står lidt ud. Alle request skal laves med POST kan være lidt forvirrende + det tydeligt de har gang i flere forskellige versioner af API'en da nogen endpoints er v2 + at nogle af eksemplerne virker i mine øjne ikke så nemme at forstå lige efter øjetesten.