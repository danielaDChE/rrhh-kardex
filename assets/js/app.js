(function(){
  'use strict';

  const DEMO_TODAY = new Date('2026-09-23T12:00:00');

  const defaultPeople = [
    {
      id:1, ci:'6842197 LP', name:'Lucía Fernanda Quispe Mamani', item:152, cargo:'Psicóloga I',
      dep:'Unidad de Administración de Centros', centro:'Centro de Acogida José Soria', asignadoDesde:'03/02/2022', ingreso:'03/02/2022', estado:'ACTIVO',
      inamovilidad:'NO', inamovilidadTipo:'', cua:'CUA-78451236', asegurado:'CNS-15284', banco:'Banco Unión - 1002458736',
      tel:'72541863', email:'lucia.quipe.demo@email.bo', domicilio:'Zona Miraflores, La Paz', nacionalidad:'Boliviana', civil:'Soltera', genero:'Femenino',
      formacion:['Licenciatura en Psicología - UMSA (2019)','Diplomado en Intervención Familiar (2022)'],
      cursos:['Prevención de violencia - 40 h','Atención psicosocial - 32 h'],
      exp:['Fundación Amanecer - Psicóloga (2019-2021)','SEDEGES - Psicóloga I (2022-actual)'],
      familia:['Rosa Mamani Huanca - Madre','Carlos Quispe Condori - Padre','Elena Quispe Mamani - Hermana'],
      trayectoria:[
        {date:'03/02/2022', title:'Ingreso institucional', text:'Asignación al ítem 152 - Psicóloga I - Centro de Acogida José Soria'}
      ]
    },
    {
      id:2, ci:'5931024 LP', name:'Marco Antonio Flores Choque', item:285, cargo:'Trabajador Social',
      dep:'Unidad de Administración de Centros', centro:'Centro de Acogida Félix Méndez Arcos', asignadoDesde:'12/06/2020', ingreso:'12/06/2020', estado:'ACTIVO',
      inamovilidad:'NO', inamovilidadTipo:'', cua:'CUA-66251874', asegurado:'CNS-28491', banco:'Banco Unión - 1003547861',
      tel:'71204635', email:'marco.flores.demo@email.bo', domicilio:'Zona Villa Fátima, La Paz', nacionalidad:'Boliviano', civil:'Casado', genero:'Masculino',
      formacion:['Licenciatura en Trabajo Social - UMSA (2017)'], cursos:['Gestión de casos - 24 h'],
      exp:['Gobierno Municipal - Trabajador Social (2017-2020)','SEDEGES - Trabajador Social (2020-actual)'],
      familia:['Julia Choque Apaza - Madre','Rafael Flores Lima - Padre','Paola Flores Choque - Cónyuge'],
      trayectoria:[{date:'12/06/2020', title:'Ingreso institucional', text:'Asignación al ítem 285 - Trabajador Social - Centro de Acogida Félix Méndez Arcos'}]
    },
    {
      id:3, ci:'7785412 LP', name:'Carla Andrea Paredes Quisbert', item:311, cargo:'Auxiliar de Enfermería',
      dep:'Unidad de Salud', centro:'Instituto de Adaptación Infantil - IDAI', asignadoDesde:'19/09/2023', ingreso:'19/09/2023', estado:'ACTIVO',
      inamovilidad:'SI', inamovilidadTipo:'Protección por discapacidad / tutor (ejemplo demo)', cua:'CUA-91364275', asegurado:'CNS-31347', banco:'Banco Unión - 1004975320',
      tel:'73011584', email:'carla.paredes.demo@email.bo', domicilio:'Zona Sopocachi, La Paz', nacionalidad:'Boliviana', civil:'Soltera', genero:'Femenino',
      formacion:['Técnico Superior en Enfermería - Instituto Técnico (2021)'], cursos:['Primeros auxilios - 20 h'],
      exp:['Clínica Central - Auxiliar (2021-2023)','SEDEGES - Auxiliar de Enfermería (2023-actual)'], familia:['Marta Quisbert Nina - Madre','Jorge Paredes Copa - Padre'],
      trayectoria:[{date:'19/09/2023', title:'Ingreso institucional', text:'Asignación al ítem 311 - Auxiliar de Enfermería - IDAI'}]
    },
    {
      id:4, ci:'6123845 LP', name:'Diego Alejandro Choque Lima', item:198, cargo:'Analista Contable',
      dep:'Unidad Administrativa Financiera', centro:'Oficina Central', asignadoDesde:'08/01/2021', ingreso:'08/01/2021', estado:'ACTIVO',
      inamovilidad:'NO', inamovilidadTipo:'', cua:'CUA-64125789', asegurado:'CNS-19082', banco:'Banco Unión - 1007189452',
      tel:'72044518', email:'diego.choque.demo@email.bo', domicilio:'Zona San Pedro, La Paz', nacionalidad:'Boliviano', civil:'Casado', genero:'Masculino',
      formacion:['Licenciatura en Contaduría Pública - UMSA (2018)'], cursos:['SIGEP - 40 h'],
      exp:['Empresa privada - Auxiliar contable (2018-2020)','SEDEGES - Analista Contable (2021-actual)'], familia:['Teresa Lima Flores - Madre','Óscar Choque Vargas - Padre'],
      trayectoria:[{date:'08/01/2021', title:'Ingreso institucional', text:'Asignación al ítem 198 - Analista Contable - Oficina Central'}]
    },
    {
      id:5, ci:'7310048 LP', name:'Ana Belén Paredes Quispe', item:244, cargo:'Asistente Administrativo',
      dep:'Unidad Administrativa Financiera', centro:'Oficina Central', asignadoDesde:'15/03/2024', ingreso:'15/03/2024', estado:'ACTIVO',
      inamovilidad:'NO', inamovilidadTipo:'', cua:'CUA-77418523', asegurado:'CNS-24713', banco:'Banco Unión - 1008462135',
      tel:'76520114', email:'ana.paredes.demo@email.bo', domicilio:'Zona Obrajes, La Paz', nacionalidad:'Boliviana', civil:'Soltera', genero:'Femenino',
      formacion:['Técnico Superior en Administración - INCOS (2022)'], cursos:['Archivo y correspondencia - 16 h'],
      exp:['Consultora privada - Asistente (2022-2023)','SEDEGES - Asistente Administrativo (2024-actual)'], familia:['Beatriz Quispe Rojas - Madre','Mario Paredes Ticona - Padre'],
      trayectoria:[{date:'15/03/2024', title:'Ingreso institucional', text:'Asignación al ítem 244 - Asistente Administrativo - Oficina Central'}]
    },
    {
      id:6, ci:'4587213 LP', name:'Jorge Luis Mamani Condori', item:167, cargo:'Técnico de Sistemas',
      dep:'Área de Tecnologías de Información', centro:'Oficina Central', asignadoDesde:'10/11/2019', ingreso:'10/11/2019', estado:'INACTIVO',
      inamovilidad:'NO', inamovilidadTipo:'', cua:'CUA-45123698', asegurado:'CNS-16931', banco:'Banco Unión - 1005317894',
      tel:'71984251', email:'jorge.mamani.demo@email.bo', domicilio:'Zona Tembladerani, La Paz', nacionalidad:'Boliviano', civil:'Casado', genero:'Masculino',
      formacion:['Ingeniería de Sistemas - UPEA (2018)'], cursos:['Administración Linux - 40 h','Redes y seguridad - 60 h'],
      exp:['Empresa TI - Soporte (2017-2019)','SEDEGES - Técnico de Sistemas (2019-2026)'], familia:['Elvira Condori Copa - Madre','Hugo Mamani Nina - Padre'],
      trayectoria:[{date:'10/11/2019', title:'Ingreso institucional', text:'Asignación al ítem 167 - Técnico de Sistemas - Oficina Central'},{date:'01/08/2026', title:'Baja registrada', text:'Cierre de vínculo laboral; el ítem queda disponible para nueva asignación'}]
    }
  ];

  let people = loadPeople();

  let items = [
    {n:152, dep:'Unidad de Administración de Centros', denom:'Profesional Técnico', puesto:'Psicólogo I', estado:'Ocupado', formacion:'Licenciatura en Psicología con título profesional', expGen:'2 años de experiencia laboral general', expEsp:'1 año de experiencia específica en atención psicosocial o protección', funciones:['Evaluación e intervención psicológica','Seguimiento de casos y coordinación interdisciplinaria','Elaboración de informes técnicos','Participación en planes de restitución de derechos']},
    {n:285, dep:'Unidad de Administración de Centros', denom:'Profesional Técnico', puesto:'Trabajador Social', estado:'Ocupado', formacion:'Licenciatura en Trabajo Social con título profesional', expGen:'2 años de experiencia laboral general', expEsp:'1 año de experiencia específica en intervención social', funciones:['Valoración sociofamiliar','Seguimiento de casos','Coordinación con instituciones','Elaboración de informes sociales']},
    {n:311, dep:'Unidad de Salud', denom:'Técnico Operativo', puesto:'Auxiliar de Enfermería', estado:'Ocupado', formacion:'Técnico Medio o Superior en Enfermería', expGen:'1 año de experiencia laboral general', expEsp:'Experiencia en atención asistencial', funciones:['Apoyo en atención de enfermería','Registro de controles básicos','Apoyo en administración de tratamientos','Coordinación con personal médico']},
    {n:198, dep:'Área de Contabilidad', denom:'Profesional Administrativo', puesto:'Analista Contable', estado:'Ocupado', formacion:'Licenciatura en Contaduría Pública o Auditoría', expGen:'3 años de experiencia general', expEsp:'2 años de experiencia en contabilidad pública', funciones:['Registro y análisis contable','Conciliaciones','Apoyo en cierres','Reportes financieros']},
    {n:244, dep:'Unidad Administrativa Financiera', denom:'Apoyo Administrativo', puesto:'Asistente Administrativo', estado:'Ocupado', formacion:'Técnico Superior en Administración o áreas afines', expGen:'1 año de experiencia general', expEsp:'Experiencia en gestión documental', funciones:['Apoyo administrativo','Control documental','Correspondencia','Atención de requerimientos internos']},
    {n:167, dep:'Área de Tecnologías de Información', denom:'Técnico Operativo', puesto:'Técnico de Sistemas', estado:'Acéfalo', formacion:'Ingeniería de Sistemas o formación técnica afín', expGen:'2 años de experiencia general', expEsp:'1 año en soporte, redes o administración de sistemas', funciones:['Soporte técnico','Administración básica de infraestructura','Gestión de incidencias','Apoyo en seguridad y redes']},
    {n:321, dep:'Unidad de Salud', denom:'Técnico Operativo', puesto:'Fisioterapeuta', estado:'Acéfalo', formacion:'Licenciatura en Fisioterapia y Kinesiología', expGen:'2 años de experiencia general', expEsp:'1 año en rehabilitación', funciones:['Evaluación funcional','Tratamiento fisioterapéutico','Seguimiento de pacientes','Registro de evolución']}
  ];

  items.forEach(function(i){ if(typeof i.habilitado==='undefined') i.habilitado=true; });
  try{const saved=localStorage.getItem('sedeges_demo_items_v3'); if(saved) items=JSON.parse(saved);}catch(e){}

  let commissions = [
    {person:1,memo:'MEM-RRHH-214/2026',dest:'Centro de Acogida Félix Méndez Arcos',start:'2026-09-18',end:'2026-09-30',obs:'Apoyo temporal por requerimiento institucional'},
    {person:1,memo:'MEM-RRHH-131/2025',dest:'Instituto de Rehabilitación Infantil - IRI',start:'2025-06-10',end:'2025-06-20',obs:'Apoyo técnico temporal'},
    {person:2,memo:'MEM-RRHH-198/2026',dest:'Centro de Acogida María Esther Quevedo',start:'2026-08-01',end:'2026-08-31',obs:'Comisión dos días por semana'},
    {person:2,memo:'MEM-RRHH-093/2025',dest:'Centro de Acogida José Soria',start:'2025-04-03',end:'2025-04-17',obs:'Seguimiento social'},
    {person:3,memo:'MEM-RRHH-172/2026',dest:'Instituto de Rehabilitación Infantil - IRI',start:'2026-07-04',end:'2026-07-15',obs:'Refuerzo de atención asistencial'},
    {person:5,memo:'MEM-RRHH-141/2026',dest:'Unidad de Planificación',start:'2026-05-11',end:'2026-05-13',obs:'Apoyo administrativo temporal'},
    {person:6,memo:'MEM-RRHH-087/2024',dest:'Centro de Acogida José Soria',start:'2024-03-04',end:'2024-03-08',obs:'Soporte técnico programado'}
  ];

  let memos = [
    {n:'MEM-RRHH-214/2026', tipo:'Comisión', person:1, effect:'Comisión temporal al Centro de Acogida Félix Méndez Arcos', fecha:'18/09/2026'},
    {n:'MEM-RRHH-209/2026', tipo:'Cambio de ítem', person:5, effect:'Cambio de ítem registrado en el vínculo laboral', fecha:'15/09/2026'},
    {n:'MEM-RRHH-201/2026', tipo:'Llamada de atención', person:4, effect:'Antecedente incorporado al expediente', fecha:'10/09/2026'},
    {n:'MEM-RRHH-188/2026', tipo:'Anulación de memorándum', person:2, effect:'Anula MEM-RRHH-176/2026', fecha:'02/09/2026'}
  ];

  let boletas = [
    {id:'BOL-0918-014', person:2, destino:'Centro de Acogida María Esther Quevedo', inicio:'09:40', fin:'12:20', step:5},
    {id:'BOL-0921-008', person:1, destino:'Instituto de Rehabilitación Infantil - IRI', inicio:'10:15', fin:'13:00', step:2},
    {id:'BOL-0922-003', person:5, destino:'Gobierno Autónomo Departamental de La Paz', inicio:'11:00', fin:'12:30', step:3}
  ];

  const marks = [
    {person:1,date:'22/09/2026',in:'08:02',out:'',source:'Biométrico',note:'En jornada'},
    {person:2,date:'22/09/2026',in:'07:58',out:'',source:'Biométrico',note:'Comisión 09:40'},
    {person:3,date:'22/09/2026',in:'08:05',out:'',source:'Biométrico',note:'En jornada'},
    {person:4,date:'22/09/2026',in:'08:17',out:'',source:'Biométrico',note:'Atraso 17 min'},
    {person:5,date:'22/09/2026',in:'08:00',out:'',source:'Biométrico',note:'Salida oficial 11:00'}
  ];

  const payroll = [
    {person:1,item:152,haber:6850,subsidio:0,desc:250,sanc:62.5},
    {person:2,item:285,haber:6420,subsidio:0,desc:220,sanc:0},
    {person:3,item:311,haber:4950,subsidio:500,desc:185,sanc:0},
    {person:4,item:198,haber:7200,subsidio:0,desc:260,sanc:135},
    {person:5,item:244,haber:5100,subsidio:0,desc:190,sanc:0}
  ];

  let audit = [
    ['22/09/2026 10:21','control01','Control de Personal','Autorizó salida','BOL-0922-003'],
    ['22/09/2026 09:50','kardex01','Kardex','Validó actualización anual','CI 6842197'],
    ['22/09/2026 09:14','rrhh01','Recursos Humanos','Generó memorándum','MEM-RRHH-214/2026'],
    ['21/09/2026 16:42','planillas01','Planillas','Importó novedades','Periodo 09/2026'],
    ['21/09/2026 14:03','kardex01','Kardex','Registró Alta CNS','CI 7785412']
  ];

  const tasks = [
    ['Actualización anual','Carla A. Paredes Quisbert','Kardex','22/09/2026'],
    ['Vacación','Lucía F. Quispe Mamani','Jefe inmediato','22/09/2026'],
    ['Boleta de salida','Ana B. Paredes Quispe','Responsable destino','22/09/2026'],
    ['Accidente laboral','Marco A. Flores Choque','Kardex','21/09/2026']
  ];

  try{
    const sm=localStorage.getItem('sedeges_demo_memos_v3'); if(sm) memos=JSON.parse(sm);
    const sb=localStorage.getItem('sedeges_demo_boletas_v3'); if(sb) boletas=JSON.parse(sb);
    const sc=localStorage.getItem('sedeges_demo_commissions_v3'); if(sc) commissions=JSON.parse(sc);
    const sa=localStorage.getItem('sedeges_demo_audit_v3'); if(sa) audit=JSON.parse(sa);
  }catch(e){}
  function saveOperationalState(){try{localStorage.setItem('sedeges_demo_items_v3',JSON.stringify(items));localStorage.setItem('sedeges_demo_memos_v3',JSON.stringify(memos));localStorage.setItem('sedeges_demo_boletas_v3',JSON.stringify(boletas));localStorage.setItem('sedeges_demo_commissions_v3',JSON.stringify(commissions));localStorage.setItem('sedeges_demo_audit_v3',JSON.stringify(audit));}catch(e){}}

  function clone(v){return JSON.parse(JSON.stringify(v));}
  function loadPeople(){
    try{ const saved=localStorage.getItem('sedeges_demo_people_v2'); return saved?JSON.parse(saved):clone(defaultPeople); }catch(e){ return clone(defaultPeople); }
  }
  function savePeople(){ try{localStorage.setItem('sedeges_demo_people_v2',JSON.stringify(people));}catch(e){} }
  function person(id){ return people.find(p=>p.id===Number(id)); }
  function money(v){ return 'Bs '+Number(v).toLocaleString('es-BO',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function esc(s){return String(s==null?'':s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));}
  function fmtDate(iso){ if(!iso)return '-'; const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`; }
  function initials(name){ return String(name||'').split(' ').filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase(); }
  function activeCommission(pid){
    const list=commissions.filter(c=>c.person===Number(pid)).filter(c=>{
      const s=new Date(c.start+'T00:00:00'), e=new Date(c.end+'T23:59:59'); return s<=DEMO_TODAY && e>=DEMO_TODAY;
    }).sort((a,b)=>b.start.localeCompare(a.start));
    return list[0]||null;
  }
  function latestCommission(pid){ return commissions.filter(c=>c.person===Number(pid)).sort((a,b)=>b.start.localeCompare(a.start))[0]||null; }

  function init(){
    bindMenu();
    renderItems(); renderPeople(); renderMemos(); renderBoletas(); renderMarks(); renderPayroll(); renderAudit(); renderTasks(); populateSelects(); renderPortal(); renderCommissionHistory(); initCharts(); calcVacationReturn();
    $('#personSearch').on('input', renderPeople);
    $('#itemSearch').on('input', renderItems);
    $('#memoModal').on('shown.bs.modal', updateMemoFields);
    showQuickPerson(people[0] ? people[0].id : null);
    if(people[0]) showPerson(people[0].id,false);
  }

  function bindMenu(){
    $('.side-menu > li > a:not(.nav-link)').on('click', function(e){
      e.preventDefault(); const li=$(this).parent(); li.toggleClass('active'); li.children('.child_menu').slideToggle(160);
    });
    $('.nav-link').on('click', function(e){
      e.preventDefault();
      const target=$(this).data('target'); showPage(target);
      const anchor=$(this).data('anchor'); if(anchor){setTimeout(()=>{const el=document.getElementById(anchor); if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},80);}
      const tab=$(this).data('person-tab'); if(tab){setTimeout(()=>activatePersonTab(tab),120);}
    });
  }

  window.showPage=function(target){
    $('.section-page').removeClass('active'); $('#page-'+target).addClass('active');
    $('.side-menu li').removeClass('current-page'); $('.side-menu a[data-target="'+target+'"]').parent().addClass('current-page');
    window.scrollTo(0,0);
  };

  function activatePersonTab(key){
    const map={laboral:'a[href^="#p-lab-"]',social:'a[href^="#p-social-"]',servicios:'a[href^="#p-serv-"]'};
    const sel=map[key]; if(sel)$(sel).first().tab('show');
  }

  function renderTasks(){
    $('#dashboardTasks').html(tasks.map(t=>`<tr><td>${esc(t[0])}</td><td>${esc(t[1])}</td><td>${esc(t[2])}</td><td>${esc(t[3])}</td><td><button class="btn btn-xs btn-default" onclick="openToast('Abriendo trámite: ${esc(t[0])}')">Revisar</button></td></tr>`).join(''));
  }

  function renderItems(){
    const q=($('#itemSearch').val()||'').toLowerCase();
    const rows=items.filter(i=>(i.n+' '+i.dep+' '+i.denom+' '+i.puesto).toLowerCase().includes(q)).map(i=>`<tr class="${i.habilitado===false?'row-muted':''}"><td><b>${i.n}</b></td><td>${esc(i.dep)}</td><td>${esc(i.denom)}</td><td>${esc(i.puesto)}</td><td><span class="status-pill ${i.estado==='Ocupado'?'s-ok':'s-neutral'}">${i.estado}</span></td><td><span class="status-pill ${i.habilitado===false?'s-neutral':'s-info'}">${i.habilitado===false?'Inhabilitado':'Habilitado'}</span></td><td><div class="table-actions"><button title="Ver detalle / POAI" class="btn btn-xs btn-primary" onclick="showItem(${i.n})"><i class="fa fa-eye"></i></button><button title="Editar" class="btn btn-xs btn-default" onclick="openItemForm(${i.n})"><i class="fa fa-pencil"></i></button><button title="Habilitar / Inhabilitar" class="btn btn-xs btn-warning" onclick="toggleItemRecord(${i.n})"><i class="fa fa-power-off"></i></button></div></td></tr>`).join('');
    $('#itemsTable').html(rows||'<tr><td colspan="7" class="text-center mini-note">No se encontraron ítems.</td></tr>');
  }

  window.openItemForm=function(n){
    const i=n?items.find(x=>x.n===Number(n)):null;
    $('#itemFormTitle').text(i?'Editar ítem / puesto':'Nuevo ítem / puesto'); $('#ifOriginal').val(i?i.n:''); $('#ifNumber').val(i?i.n:''); $('#ifDep').val(i?i.dep:''); $('#ifSituation').val(i?i.estado:'Acéfalo'); $('#ifDenom').val(i?i.denom:''); $('#ifPuesto').val(i?i.puesto:''); $('#ifFormacion').val(i?i.formacion:''); $('#ifExpGen').val(i?i.expGen:''); $('#ifExpEsp').val(i?i.expEsp:''); $('#ifFunciones').val(i?(i.funciones||[]).join('\n'):''); $('#itemFormModal').modal('show');
  };
  window.saveItemForm=function(){
    const orig=Number($('#ifOriginal').val()||0), n=Number($('#ifNumber').val()||0); if(!n||!$('#ifPuesto').val().trim()||!$('#ifDep').val().trim()){openToast('Complete Nº de ítem, dependencia y puesto funcional');return;}
    const data={n,dep:$('#ifDep').val().trim(),denom:$('#ifDenom').val().trim(),puesto:$('#ifPuesto').val().trim(),estado:$('#ifSituation').val(),formacion:$('#ifFormacion').val().trim(),expGen:$('#ifExpGen').val().trim(),expEsp:$('#ifExpEsp').val().trim(),funciones:$('#ifFunciones').val().split(/\n+/).map(x=>x.trim()).filter(Boolean),habilitado:true};
    const target=items.find(x=>x.n===orig); if(target){data.habilitado=target.habilitado!==false; Object.assign(target,data);} else {if(items.some(x=>x.n===n)){openToast('Ya existe un ítem con ese número');return;} items.push(data);}
    saveOperationalState(); renderItems(); $('#itemFormModal').modal('hide'); openToast(orig?'Ítem actualizado':'Ítem registrado');
  };
  window.toggleItemRecord=function(n){const i=items.find(x=>x.n===Number(n));if(!i)return;i.habilitado=i.habilitado===false;saveOperationalState();renderItems();openToast('Registro '+(i.habilitado?'habilitado':'inhabilitado'));};

  window.showItem=function(n){
    const i=items.find(x=>x.n===Number(n)); if(!i)return;
    const assigned=people.find(p=>p.item===i.n && p.estado==='ACTIVO');
    const profile=assigned?`<div class="profile-box"><h4>Información registrada del servidor asignado</h4><p><b>${esc(assigned.name)}</b></p><p class="mini-note">Se muestra la información disponible para que el responsable la contraste visualmente con el perfil del puesto.</p><b>Formación registrada</b><ul class="profile-list">${assigned.formacion.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><b>Experiencia registrada</b><ul class="profile-list">${assigned.exp.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:`<div class="profile-box"><h4>Situación actual</h4><p><span class="status-pill s-neutral">Ítem disponible / acéfalo</span></p><p class="mini-note">El perfil POAI puede consultarse antes de una nueva asignación.</p></div>`;
    $('#itemModalBody').html(`<div class="summary-strip"><div class="summary-card"><div class="k">Nº ítem</div><div class="v">${i.n}</div></div><div class="summary-card"><div class="k">Denominación</div><div class="v">${esc(i.denom)}</div></div><div class="summary-card"><div class="k">Puesto funcional</div><div class="v">${esc(i.puesto)}</div></div><div class="summary-card"><div class="k">Situación</div><div class="v">${esc(i.estado)}</div></div></div><p><b>Dependencia:</b> ${esc(i.dep)}</p><div class="poai-grid"><div class="profile-box"><h4>Perfil POAI - Gestión 2026</h4><p><b>Formación requerida</b><br>${esc(i.formacion)}</p><p><b>Experiencia general</b><br>${esc(i.expGen)}</p><p><b>Experiencia específica</b><br>${esc(i.expEsp)}</p><b>Funciones principales</b><ul class="profile-list">${i.funciones.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></div>${profile}</div>`);
    $('#itemModal').modal('show');
  };

  window.renderPeople=function(){
    const q=($('#personSearch').val()||'').toLowerCase();
    const status=$('#statusFilter').val()||'', imm=$('#immobilityFilter').val()||'', dep=$('#depFilter').val()||'';
    const filtered=people.filter(p=>{
      const hit=(p.name+' '+p.ci+' '+p.item+' '+p.cargo+' '+p.centro+' '+p.dep).toLowerCase().includes(q);
      return hit && (!status || p.estado===status) && (!imm || p.inamovilidad===imm) && (!dep || p.dep===dep);
    });
    $('#peopleCount').text('Mostrando '+filtered.length+' de '+people.length+' registros');
    $('#peopleTable').html(filtered.map(p=>`<tr class="${p.estado==='INACTIVO'?'row-muted':''}"><td>${esc(p.ci)}</td><td><b>${esc(p.name)}</b></td><td>${esc(p.item)}</td><td>${esc(p.cargo)}</td><td>${esc(p.centro)}</td><td><span class="status-pill ${p.estado==='ACTIVO'?'s-ok':'s-neutral'}">${p.estado}</span></td><td><div class="table-actions"><button title="Ver resumen" class="btn btn-xs btn-primary" onclick="showQuickPerson(${p.id})"><i class="fa fa-eye"></i></button><button title="Editar" class="btn btn-xs btn-default" onclick="openPersonForm(${p.id})"><i class="fa fa-pencil"></i></button><button title="${p.estado==='ACTIVO'?'Inhabilitar':'Habilitar'}" class="btn btn-xs btn-warning" onclick="togglePerson(${p.id})"><i class="fa fa-power-off"></i></button><button title="Eliminar" class="btn btn-xs btn-danger" onclick="deletePerson(${p.id})"><i class="fa fa-trash"></i></button></div></td></tr>`).join('') || '<tr><td colspan="7" class="text-center mini-note">No se encontraron registros.</td></tr>');
  };

  window.showQuickPerson=function(id){
    const p=person(id); if(!p){return;}
    const cur=activeCommission(p.id);
    const ina=p.inamovilidad==='SI' ? `<span class="status-pill s-pending">Sí</span><div class="mini-note" style="margin-top:3px">${esc(p.inamovilidadTipo)}</div>` : '<span class="status-pill s-neutral">No</span>';
    const comm=cur?`<div class="quick-commission"><div class="quick-label">Comisión vigente</div><b>${esc(cur.dest)}</b><div class="mini-note">Inicio: ${fmtDate(cur.start)} · Fin: ${fmtDate(cur.end)}</div></div>`:'';
    $('#quickPersonCard').html(`<div class="x_title"><h2>Ficha Resumen</h2><div class="clearfix"></div></div><div class="x_content"><div class="quick-head"><div class="person-avatar">${initials(p.name)}</div><div><span class="status-pill ${p.estado==='ACTIVO'?'s-ok':'s-neutral'}">${p.estado}</span><h4>${esc(p.name)}</h4><div class="mini-note">${esc(p.cargo)}</div></div></div><div class="quick-fields"><div><span>C.I.</span><b>${esc(p.ci)}</b></div><div><span>Ítem</span><b>${esc(p.item)}</b></div><div><span>Dependencia</span><b>${esc(p.dep)}</b></div><div><span>Asignación base</span><b>${esc(p.centro)}</b></div><div><span>Asignado desde</span><b>${esc(p.asignadoDesde)}</b></div><div><span>Inamovilidad</span><b>${ina}</b></div></div>${comm}<button class="btn btn-brand btn-block" onclick="showPerson(${p.id}, true)"><i class="fa fa-folder-open"></i> Ver expediente completo</button></div>`);
  };

  window.showPerson=function(id, switchPage){
    const p=person(id); if(!p)return;
    if(switchPage!==false)showPage('expediente');
    $('#expedientePersonSelect').val(String(p.id));
    const item=items.find(i=>i.n===Number(p.item));
    const cur=activeCommission(p.id); const latest=latestCommission(p.id);
    const commissionLine=cur?`<div class="current-commission"><i class="fa fa-flag"></i> <b>Comisión vigente:</b> ${esc(cur.dest)} <span>Inicio ${fmtDate(cur.start)} · Fin ${fmtDate(cur.end)}</span></div>`:(latest?`<div class="current-commission muted"><i class="fa fa-flag-o"></i> Última comisión: ${esc(latest.dest)} <span>${fmtDate(latest.start)} - ${fmtDate(latest.end)}</span></div>`:'');
    const inamovilidad = p.inamovilidad==='SI' ? `<span class="status-pill s-pending">Sí</span><span class="mini-note"> ${esc(p.inamovilidadTipo)}</span>` : '<span class="status-pill s-neutral">No</span>';
    const html=`<div class="x_title"><h2>Ficha Integral del Servidor</h2><ul class="nav navbar-right panel_toolbox"><li><button class="btn btn-xs btn-default" onclick="openPersonForm(${p.id})"><i class="fa fa-pencil"></i> Editar</button></li><li><button class="btn btn-xs btn-default" onclick="openAnnualUpdate()"><i class="fa fa-refresh"></i> Actualización anual</button></li><li><button class="btn btn-xs btn-default" onclick="showCertificate(${p.id})"><i class="fa fa-print"></i> Imprimir ficha</button></li></ul><div class="clearfix"></div></div><div class="x_content">
      <div class="person-head"><div class="person-id"><div class="person-avatar person-avatar-lg">${initials(p.name)}</div><div class="person-meta"><h3>${esc(p.name)}</h3><div>C.I. ${esc(p.ci)} · <span class="status-pill ${p.estado==='ACTIVO'?'s-ok':'s-neutral'}">${p.estado}</span></div></div></div><div class="toolbar"><button class="btn btn-default btn-sm" onclick="showItem(${p.item})"><i class="fa fa-briefcase"></i> Ítem / POAI</button><button class="btn btn-default btn-sm" onclick="showCertificate(${p.id})"><i class="fa fa-file-pdf-o"></i> Certificado</button><button class="btn btn-default btn-sm" onclick="openVacation()"><i class="fa fa-calendar"></i> Vacación</button><button class="btn btn-default btn-sm" onclick="toggleCNS(${p.id})"><i class="fa fa-heartbeat"></i> Alta/Baja CNS</button></div></div>
      <div class="summary-strip summary-compact"><div class="summary-card"><div class="k">Ítem / cargo</div><div class="v">${p.item} · ${esc(p.cargo)}</div></div><div class="summary-card"><div class="k">Asignación base</div><div class="v">${esc(p.centro)}</div><div class="mini-note">Desde ${esc(p.asignadoDesde)}</div></div><div class="summary-card"><div class="k">Dependencia</div><div class="v">${esc(p.dep)}</div></div><div class="summary-card"><div class="k">Inamovilidad</div><div class="v">${inamovilidad}</div></div></div>
      ${commissionLine}
      <ul class="nav nav-tabs person-tabs"><li class="active"><a data-toggle="tab" href="#p-res-${p.id}">Resumen</a></li><li><a data-toggle="tab" href="#p-exp-${p.id}">Expediente personal</a></li><li><a data-toggle="tab" href="#p-lab-${p.id}">Vínculo laboral</a></li><li><a data-toggle="tab" href="#p-social-${p.id}">Seguridad social</a></li><li><a data-toggle="tab" href="#p-serv-${p.id}">Servicios Kardex</a></li><li><a data-toggle="tab" href="#p-his-${p.id}">Trayectoria</a></li></ul>
      <div class="tab-content">
        <div id="p-res-${p.id}" class="tab-pane fade in active"><div class="info-grid"><div class="info-field"><div class="k">Teléfono</div><div class="v">${esc(p.tel)}</div></div><div class="info-field"><div class="k">Correo</div><div class="v">${esc(p.email)}</div></div><div class="info-field"><div class="k">Domicilio</div><div class="v">${esc(p.domicilio)}</div></div><div class="info-field"><div class="k">Nacionalidad</div><div class="v">${esc(p.nacionalidad)}</div></div><div class="info-field"><div class="k">Estado civil</div><div class="v">${esc(p.civil)}</div></div><div class="info-field"><div class="k">Género</div><div class="v">${esc(p.genero)}</div></div></div><hr><div class="poai-grid"><div class="profile-box"><h4>Detalle del Ítem / POAI 2026</h4><p><b>${item?esc(item.puesto):esc(p.cargo)}</b></p><p>${item?esc(item.formacion):'Perfil no cargado en el demo'}</p><button class="btn btn-xs btn-default" onclick="showItem(${p.item})">Ver características y funciones</button></div><div class="profile-box"><h4>Ficha anual</h4><p>El servidor revisa y actualiza su información una vez por gestión. Kardex verifica los cambios.</p><button class="btn btn-xs btn-brand" onclick="openAnnualUpdate()">Revisar actualización</button></div></div></div>
        <div id="p-exp-${p.id}" class="tab-pane fade"><div class="poai-grid"><div class="profile-box"><h4>Hoja de Vida</h4><b>Formación</b><ul class="profile-list">${p.formacion.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><b>Cursos</b><ul class="profile-list">${p.cursos.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><b>Experiencia</b><ul class="profile-list">${p.exp.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><button class="btn btn-xs btn-default" onclick="openToast('Kardex puede verificar o corregir la información registrada por el servidor')">Verificar / editar</button></div><div class="profile-box"><h4>Familiares y parentesco</h4><ul class="profile-list">${p.familia.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p class="mini-note">La misma información alimenta la Ficha Personal y procesos relacionados; no se vuelve a solicitar.</p><button class="btn btn-xs btn-default" onclick="openToast('Edición de familiares habilitada')">Verificar / editar</button></div></div></div>
        <div id="p-lab-${p.id}" class="tab-pane fade"><div class="info-grid"><div class="info-field"><div class="k">Fecha de ingreso</div><div class="v">${esc(p.ingreso)}</div></div><div class="info-field"><div class="k">Ítem</div><div class="v">${esc(p.item)}</div></div><div class="info-field"><div class="k">Cargo</div><div class="v">${esc(p.cargo)}</div></div><div class="info-field"><div class="k">Dependencia</div><div class="v">${esc(p.dep)}</div></div><div class="info-field"><div class="k">Asignación base</div><div class="v">${esc(p.centro)}</div></div><div class="info-field"><div class="k">Asignado desde</div><div class="v">${esc(p.asignadoDesde)}</div></div></div><hr><button class="btn btn-default" onclick="showPage('comisiones'); $('#commissionPerson').val('${p.id}'); renderCommissionHistory();"><i class="fa fa-exchange"></i> Ver historial de comisiones</button></div>
        <div id="p-social-${p.id}" class="tab-pane fade"><div class="info-grid"><div class="info-field"><div class="k">CUA / NUA</div><div class="v">${esc(p.cua)}</div></div><div class="info-field"><div class="k">Nº asegurado CNS</div><div class="v">${esc(p.asegurado)}</div></div><div class="info-field"><div class="k">Cuenta bancaria</div><div class="v">${esc(p.banco)}</div></div></div><hr><button class="btn btn-default" onclick="toggleCNS(${p.id})"><i class="fa fa-heartbeat"></i> Registrar Alta / Baja CNS</button></div>
        <div id="p-serv-${p.id}" class="tab-pane fade"><div class="action-grid" style="grid-template-columns:repeat(3,1fr)"><div class="action-card" onclick="openVacation()"><i class="fa fa-calendar"></i><b>Vacaciones</b><span>Solicitud y cálculo de días hábiles</span></div><div class="action-card" onclick="showCertificate(${p.id})"><i class="fa fa-file-text-o"></i><b>Certificado de trabajo</b><span>Generación con datos e historial</span></div><div class="action-card" onclick="openToast('Registro de accidente: datos del servidor autocompletados')"><i class="fa fa-ambulance"></i><b>Accidente laboral</b><span>Formulario con datos reutilizados</span></div></div></div>
        <div id="p-his-${p.id}" class="tab-pane fade">${trajectoryHtml(p)}</div>
      </div></div>`;
    $('#personDetail').html(html);
  };

  function trajectoryHtml(p){
    const rows=(p.trayectoria||[]).slice().sort((a,b)=>parseDMY(b.date)-parseDMY(a.date));
    return `<p class="mini-note">Trayectoria institucional base. Las comisiones se consultan en su historial independiente para no mezclar ambos conceptos.</p><div class="timeline-clean">${rows.map((r,idx)=>`<div class="timeline-row"><span class="timeline-dot"></span><div class="date">${esc(r.date)}${idx===0?' · MÁS RECIENTE':''}</div><div class="title">${esc(r.title)}</div><div class="text">${esc(r.text)}</div></div>`).join('')}</div>`;
  }
  function parseDMY(v){ const [d,m,y]=String(v).split('/').map(Number); return new Date(y,m-1,d); }

  window.renderCommissionHistory=function(){
    const q=($('#commissionSearch').val()||'').toLowerCase(); const pid=Number($('#commissionPerson').val()||0);
    const rows=commissions.filter(c=>!pid||c.person===pid).filter(c=>{const p=person(c.person); return ((p?p.name:'')+' '+c.dest+' '+c.memo+' '+c.obs).toLowerCase().includes(q);}).sort((a,b)=>b.start.localeCompare(a.start));
    $('#commissionHistoryTable').html(rows.map(c=>{const p=person(c.person); const active=activeCommission(c.person)===c; return `<tr><td><b>${p?esc(p.name):'Servidor'}</b></td><td>${esc(c.memo)}</td><td>${esc(c.dest)}</td><td>${fmtDate(c.start)}</td><td>${fmtDate(c.end)}</td><td>${active?'<span class="status-pill s-info">Vigente</span> ':''}${esc(c.obs)}</td></tr>`;}).join('')||'<tr><td colspan="6" class="text-center mini-note">No existen comisiones para el criterio seleccionado.</td></tr>');
  };

  window.openPersonForm=function(id){
    const p=id?person(id):null;
    $('#personFormTitle').text(p?'Editar servidor':'Nuevo servidor');
    $('#pfId').val(p?p.id:''); $('#pfCi').val(p?p.ci:''); $('#pfName').val(p?p.name:''); $('#pfItem').val(p?p.item:''); $('#pfCargo').val(p?p.cargo:''); $('#pfEstado').val(p?p.estado:'ACTIVO'); $('#pfDep').val(p?p.dep:''); $('#pfCentro').val(p?p.centro:''); $('#pfIngreso').val(p?p.ingreso:''); $('#pfInamovilidad').val(p?p.inamovilidad:'NO'); $('#pfInamovilidadTipo').val(p?p.inamovilidadTipo:'');
    $('#personFormModal').modal('show');
  };

  window.savePersonForm=function(){
    const id=Number($('#pfId').val()||0), itemNum=Number($('#pfItem').val()||0);
    const base={ci:$('#pfCi').val().trim(),name:$('#pfName').val().trim(),item:itemNum,cargo:$('#pfCargo').val().trim(),estado:$('#pfEstado').val(),dep:$('#pfDep').val().trim(),centro:$('#pfCentro').val().trim(),ingreso:$('#pfIngreso').val().trim(),asignadoDesde:$('#pfIngreso').val().trim(),inamovilidad:$('#pfInamovilidad').val(),inamovilidadTipo:$('#pfInamovilidadTipo').val().trim()};
    if(!base.ci||!base.name||!base.item){openToast('Complete C.I., nombre e ítem');return;}
    if(id){Object.assign(person(id),base);openToast('Registro actualizado');}
    else{const next=Math.max(0,...people.map(p=>p.id))+1;people.push(Object.assign({id:next,cua:'Pendiente',asegurado:'Pendiente',banco:'Pendiente',tel:'',email:'',domicilio:'',nacionalidad:'Boliviana',civil:'',genero:'',formacion:[],cursos:[],exp:[],familia:[],trayectoria:[{date:base.ingreso||'23/09/2026',title:'Ingreso institucional',text:`Asignación al ítem ${base.item} - ${base.cargo} - ${base.centro}`}]},base));openToast('Nuevo servidor registrado');}
    savePeople(); $('#personFormModal').modal('hide'); renderPeople(); populateSelects(); const saved=id?person(id):people[people.length-1]; showQuickPerson(saved.id); showPerson(saved.id,false);
  };

  window.togglePerson=function(id){const p=person(id);if(!p)return;p.estado=p.estado==='ACTIVO'?'INACTIVO':'ACTIVO';savePeople();renderPeople();showQuickPerson(id);showPerson(id,false);openToast('Estado actualizado a '+p.estado);};
  window.deletePerson=function(id){const p=person(id);if(!p)return;if(!window.confirm('Este registro posee información relacionada. Para conservar la trazabilidad no se eliminará físicamente. ¿Desea inhabilitarlo?'))return;p.estado='INACTIVO';savePeople();renderPeople();showQuickPerson(id);showPerson(id,false);openToast('Registro inhabilitado; el historial se conserva');};

  function renderMemos(){
    $('#memoTable').html(memos.map(m=>{const p=person(m.person);return `<tr><td><b>${esc(m.n)}</b></td><td>${esc(m.tipo)}</td><td>${p?esc(p.name):'-'}</td><td>${esc(m.effect)}</td><td>${esc(m.fecha)}</td><td><button class="btn btn-xs btn-default" onclick="previewMemo('${m.n}')"><i class="fa fa-eye"></i> Ver</button></td></tr>`}).join(''));
  }

  window.updateMemoFields=function(){
    const type=$('#memoType').val(); let html='';
    if(type==='Comisión')html=`<div class="row"><div class="col-md-6"><label>Destino / centro</label><input id="memoDest" class="form-control" value="Centro de Acogida José Soria"></div><div class="col-md-3"><label>Fecha inicio</label><input id="memoStart" type="date" class="form-control" value="2026-09-24"></div><div class="col-md-3"><label>Fecha fin</label><input id="memoEnd" type="date" class="form-control" value="2026-09-30"></div></div>`;
    else if(type==='Cambio de ítem')html=`<div class="row"><div class="col-md-6"><label>Nuevo ítem</label><input id="memoNewItem" class="form-control" value="321"></div><div class="col-md-6"><label>Fecha efectiva</label><input type="date" class="form-control" value="2026-10-01"></div></div>`;
    else if(type==='Anulación de memorándum')html=`<div class="row"><div class="col-md-7"><label>Memorándum que se anula</label><input id="memoCancelRef" class="form-control" value="MEM-RRHH-176/2026"></div><div class="col-md-5"><label>Fecha</label><input type="date" class="form-control" value="2026-09-23"></div></div>`;
    else html=`<div class="row"><div class="col-md-7"><label>Motivo / referencia</label><input id="memoReason" class="form-control" value="Según necesidad institucional"></div><div class="col-md-5"><label>Fecha efectiva</label><input type="date" class="form-control" value="2026-09-23"></div></div>`;
    $('#memoDynamicFields').html(html);
  };

  window.generateMemo=function(){
    const type=$('#memoType').val(),pid=Number($('#memoPerson').val()),p=person(pid);if(!p)return;
    const num='MEM-RRHH-'+String(220+memos.length).padStart(3,'0')+'/2026'; let effect='Registro administrativo: '+type;
    if(type==='Comisión'){const dest=$('#memoDest').val()||'destino institucional', start=$('#memoStart').val(),end=$('#memoEnd').val();effect='Comisión temporal a '+dest;commissions.unshift({person:pid,memo:num,dest,start,end,obs:'Generada desde el módulo de memorándums'});renderCommissionHistory();}
    if(type==='Cambio de ítem')effect='Cambio al ítem '+($('#memoNewItem').val()||'');
    if(type==='Anulación de memorándum')effect='Anula '+($('#memoCancelRef').val()||'memorándum de referencia');
    memos.unshift({n:num,tipo:type,person:pid,effect,fecha:'23/09/2026'});renderMemos();$('#memoModal').modal('hide');
    showDoc('Memorándum generado',`<div class="doc-head"><b>GOBIERNO AUTÓNOMO DEPARTAMENTAL DE LA PAZ</b><br>SERVICIO DEPARTAMENTAL DE GESTIÓN SOCIAL - SEDEGES</div><h3>MEMORÁNDUM ${num}</h3><p><b>A:</b> ${esc(p.name)}<br><b>C.I.:</b> ${esc(p.ci)}<br><b>Ítem:</b> ${esc(p.item)}<br><b>Cargo:</b> ${esc(p.cargo)}</p><p><b>Tipo:</b> ${esc(type)}</p><p>${esc(effect)}.</p><p><b>Fecha:</b> 23 de septiembre de 2026</p><div class="doc-sign">______________________________<br>RECURSOS HUMANOS - SEDEGES</div>`);
    audit.unshift(['23/09/2026 '+new Date().toTimeString().slice(0,5),'rrhh01','Recursos Humanos','Generó memorándum',num]);saveOperationalState();renderAudit();
  };

  window.previewMemo=function(n){const m=memos.find(x=>x.n===n),p=m?person(m.person):null;if(!m||!p)return;showDoc('Memorándum '+n,`<div class="doc-head"><b>GOBIERNO AUTÓNOMO DEPARTAMENTAL DE LA PAZ</b><br>SERVICIO DEPARTAMENTAL DE GESTIÓN SOCIAL - SEDEGES</div><h3>MEMORÁNDUM ${esc(m.n)}</h3><p><b>A:</b> ${esc(p.name)}<br><b>C.I.:</b> ${esc(p.ci)}<br><b>Ítem:</b> ${esc(p.item)}<br><b>Cargo:</b> ${esc(p.cargo)}</p><p><b>Tipo:</b> ${esc(m.tipo)}</p><p>${esc(m.effect)}.</p><p>La Paz, ${esc(m.fecha)}</p><div class="doc-sign">______________________________<br>RECURSOS HUMANOS - SEDEGES</div>`);};

  function renderBoletas(){
    $('#boletaTable').html(boletas.map(b=>{const p=person(b.person);return `<tr><td><b>${b.id}</b></td><td>${p?esc(p.name):'-'}</td><td>${esc(b.destino)}</td><td>${esc(b.inicio)} - ${esc(b.fin)}</td><td>${flowHtml(b.step)}</td><td><button class="btn btn-xs btn-default" onclick="advanceBoleta('${b.id}')">${b.step<5?'Avanzar':'Ver'}</button></td></tr>`}).join(''));
  }
  function flowHtml(step){const names=['Solicitud creada','Jefe autoriza','Salida registrada','Destino confirma llegada','Destino confirma salida'];return `<div class="workflow">${names.map((x,i)=>`<span class="step ${i<step?'done':''}">${i+1}. ${x}</span>${i<4?'<span class="arrow">→</span>':''}`).join('')}</div>`;}
  window.createBoleta=function(){const pid=Number($('#boletaPerson').val()),dest=$('#boletaDestination').val(),start=$('#boletaStart').val(),end=$('#boletaEnd').val();const id='BOL-0923-'+String(boletas.length+10).padStart(3,'0');boletas.unshift({id,person:pid,destino:dest,inicio:start,fin:end,step:1});saveOperationalState();renderBoletas();$('#boletaModal').modal('hide');openToast('Boleta creada y enviada al jefe inmediato para autorización');renderPortal();};
  window.advanceBoleta=function(id){const b=boletas.find(x=>x.id===id);if(!b)return;if(b.step<5){b.step++;saveOperationalState();renderBoletas();const msg=['Solicitud creada','Jefe inmediato autorizó la salida','Hora de salida registrada','Responsable del destino confirmó llegada','Responsable del destino confirmó salida'][b.step-1];openToast(msg);}else openToast('Boleta cerrada y disponible para Control de Personal');};

  function renderMarks(){$('#markTable').html(marks.map(m=>`<tr><td>${esc(person(m.person)?.name||'-')}</td><td>${m.date}</td><td>${m.in}</td><td>${m.out||'-'}</td><td>${m.source}</td><td>${m.note}</td></tr>`).join(''));}
  function renderPayroll(){$('#payrollTable').html(payroll.map((r,idx)=>{const p=person(r.person);if(!p)return'';const net=r.haber+r.subsidio-r.desc-r.sanc;return `<tr><td>${esc(p.name)}</td><td>${r.item}</td><td>${money(r.haber)}</td><td>${money(r.subsidio)}</td><td>${money(r.desc)}</td><td>${money(r.sanc)}</td><td><b>${money(net)}</b></td><td><button class="btn btn-xs btn-default" onclick="showPayslip(${idx})">Ver boleta</button></td></tr>`}).join(''));}
  window.showPayslip=function(idx){const r=payroll[idx]||payroll[0],p=person(r.person);if(!p)return;const net=r.haber+r.subsidio-r.desc-r.sanc;showDoc('Boleta de pago',`<div class="doc-head"><b>SERVICIO DEPARTAMENTAL DE GESTIÓN SOCIAL - SEDEGES</b><br>BOLETA DE PAGO - SEPTIEMBRE 2026</div><h3>${esc(p.name)}</h3><p><b>C.I.:</b> ${esc(p.ci)} &nbsp;&nbsp; <b>Ítem:</b> ${esc(p.item)}<br><b>Cargo:</b> ${esc(p.cargo)}<br><b>Dependencia:</b> ${esc(p.dep)}</p><table class="table"><tr><th>Concepto</th><th class="text-right">Importe</th></tr><tr><td>Haber básico</td><td class="text-right">${money(r.haber)}</td></tr><tr><td>Subsidios</td><td class="text-right">${money(r.subsidio)}</td></tr><tr><td>Descuentos</td><td class="text-right">-${money(r.desc)}</td></tr><tr><td>Sanciones / novedades</td><td class="text-right">-${money(r.sanc)}</td></tr><tr><th>Líquido pagable</th><th class="text-right">${money(net)}</th></tr></table><p class="mini-note">Documento demostrativo. Los montos son ficticios.</p>`);};

  function renderAudit(){$('#auditTable').html(audit.map(a=>`<tr><td>${a[0]}</td><td>${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td><td>${a[4]}</td></tr>`).join(''));}
  function renderPortal(){$('#portalMarks').html(`<tr><td>22/09/2026</td><td>08:02</td><td>-</td><td>En jornada</td></tr><tr><td>21/09/2026</td><td>07:59</td><td>17:31</td><td>Completa</td></tr><tr><td>18/09/2026</td><td>08:01</td><td>16:45</td><td>Comisión registrada</td></tr>`);$('#portalRequests').html(`<tr><td>Vacación 5 días</td><td>22/09/2026</td><td><span class="status-pill s-pending">Jefe inmediato</span></td></tr><tr><td>Boleta comisión IRI</td><td>21/09/2026</td><td><span class="status-pill s-info">En seguimiento</span></td></tr><tr><td>Actualización de ficha</td><td>20/09/2026</td><td><span class="status-pill s-pending">Validación Kardex</span></td></tr>`);}

  function populateSelects(){
    const opts=people.map(p=>`<option value="${p.id}">${esc(p.name)} · Ítem ${esc(p.item)}</option>`).join('');
    $('#memoPerson,#boletaPerson,#expedientePersonSelect').html(opts);
    $('#commissionPerson').html('<option value="">Todos los servidores</option>'+opts);
    const deps=[...new Set(people.map(p=>p.dep).filter(Boolean))].sort(); $('#depFilter').html('<option value="">Todas las dependencias</option>'+deps.map(d=>'<option>'+esc(d)+'</option>').join(''));
    if(people[0])$('#expedientePersonSelect').val(String(people[0].id));
  }

  window.openVacation=function(){calcVacationReturn();$('#vacationModal').modal('show');};
  window.calcVacationReturn=function(){const start=$('#vacStart').val(),days=Number($('#vacDays').val()||0);if(!start||!days)return;let d=new Date(start+'T12:00:00'),count=0;while(count<days){const w=d.getDay();if(w!==0&&w!==6)count++;if(count<days)d.setDate(d.getDate()+1);}d.setDate(d.getDate()+1);while(d.getDay()===0||d.getDay()===6)d.setDate(d.getDate()+1);$('#vacReturn').val(d.toLocaleDateString('es-BO'));};
  window.submitVacation=function(){$('#vacationModal').modal('hide');openToast('Solicitud enviada al jefe inmediato');$('#kpiPending').text('10');renderPortal();};
  window.openAnnualUpdate=function(){$('#annualModal').modal('show');};
  window.confirmAnnualUpdate=function(){$('#annualModal').modal('hide');openToast('Información confirmada y enviada a Kardex para verificación');};
  window.registerMark=function(){const t=new Date().toLocaleTimeString('es-BO',{hour:'2-digit',minute:'2-digit'});openToast('Marcación demostrativa registrada a las '+t+' con autorización de ubicación');};
  window.toggleCNS=function(pid){const p=person(pid);if(!p)return;showDoc('Movimiento de Caja Nacional de Salud',`<div class="doc-head"><b>SEDEGES - KARDEX</b><br>REGISTRO DE MOVIMIENTO CNS</div><h3>${esc(p.name)}</h3><p>Los datos personales, C.I., CUA, ítem, cargo y fecha de ingreso se recuperan del expediente.</p><div class="row"><div class="col-xs-6"><b>Movimiento</b><br><span class="status-pill s-info">ALTA / BAJA</span></div><div class="col-xs-6"><b>Fecha</b><br>23/09/2026</div></div><hr><p><b>Nº asegurado:</b> ${esc(p.asegurado)}<br><b>CUA:</b> ${esc(p.cua)}</p><p class="mini-note">Solo se completan los datos específicos del movimiento seleccionado.</p>`);};
  window.showCertificate=function(pid){const p=person(pid);if(!p)return;showDoc('Certificado de trabajo',`<div class="doc-head"><b>GOBIERNO AUTÓNOMO DEPARTAMENTAL DE LA PAZ</b><br><b>SERVICIO DEPARTAMENTAL DE GESTIÓN SOCIAL - SEDEGES</b></div><h3>CERTIFICADO DE TRABAJO</h3><p>Se certifica que <b>${esc(p.name)}</b>, con C.I. ${esc(p.ci)}, presta servicios en la institución desde el ${esc(p.ingreso)}, desempeñando actualmente el cargo de <b>${esc(p.cargo)}</b>, correspondiente al ítem <b>${esc(p.item)}</b>.</p><p>Su asignación base registrada corresponde a <b>${esc(p.centro)}</b>.</p><p>Se extiende el presente certificado a solicitud de la parte interesada para los fines consiguientes.</p><p>La Paz, 23 de septiembre de 2026.</p><div class="doc-sign">______________________________<br>RESPONSABLE DE RECURSOS HUMANOS</div>`);};

  function showDoc(title,body){$('#docTitle').text(title);$('#docPreview').html(body);$('#docModal').modal('show');}
  window.openToast=function(msg){const el=$('#toast');el.stop(true,true).text(msg).fadeIn(150).delay(2200).fadeOut(250);};
  window.exportPeopleCSV=function(){const rows=[['CI','NOMBRE','ITEM','CARGO','DEPENDENCIA','ASIGNACION','FECHA INGRESO','ESTADO','INAMOVILIDAD']].concat(people.map(p=>[p.ci,p.name,p.item,p.cargo,p.dep,p.centro,p.ingreso,p.estado,p.inamovilidad]));const csv='\ufeff'+rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(';')).join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='nomina_personal_demo.csv';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);};

  window.exportCommissionCSV=function(){const rows=[['SERVIDOR','MEMORANDUM','DESTINO','INICIO','FIN','OBSERVACION']].concat(commissions.map(c=>{const p=person(c.person);return[p?p.name:'',c.memo,c.dest,c.start,c.end,c.obs]}));const csv='\ufeff'+rows.map(r=>r.map(v=>'"'+String(v||'').replace(/"/g,'""')+'"').join(';')).join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='historial_comisiones_demo.csv';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);};

  window.SDGDemo={renderItems,renderPeople,renderMemos,renderBoletas,renderAudit,populateSelects,saveOperationalState};

  function initCharts(){
    const ctx1=document.getElementById('chartUnits');if(ctx1)new Chart(ctx1,{type:'bar',data:{labels:['Administración de Centros','Salud','UAF','Planificación','Acreditación','Certificación'],datasets:[{label:'Servidores',data:[62,38,34,18,21,13],backgroundColor:['#7a1f3d','#2f7d61','#337ab7','#8e6c8a','#d28b3c','#607d8b']}]},options:{responsive:true,maintainAspectRatio:false,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true}}]}}});
    const ctx2=document.getElementById('chartAttendance');if(ctx2)new Chart(ctx2,{type:'doughnut',data:{labels:['Asistencia regular','Comisiones','Vacaciones','Licencias','Novedades'],datasets:[{data:[142,16,10,7,11],backgroundColor:['#2f7d61','#337ab7','#b7791f','#8e6c8a','#c05656']}]},options:{responsive:true,maintainAspectRatio:false,legend:{position:'bottom',labels:{boxWidth:12,fontSize:10}}}});
  }

  $(document).ready(init);
})();
