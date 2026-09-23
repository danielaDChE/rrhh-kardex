(function(){
'use strict';
const defaultUsers=[
{id:1,user:'admin',area:'Administración',role:'Administrador',status:'HABILITADO'},
{id:2,user:'kardex01',area:'Kardex',role:'Responsable Kardex',status:'HABILITADO'},
{id:3,user:'rrhh01',area:'Recursos Humanos',role:'Analista RR.HH.',status:'HABILITADO'},
{id:4,user:'control01',area:'Control de Personal',role:'Responsable Control',status:'HABILITADO'},
{id:5,user:'planillas01',area:'Planillas',role:'Analista Planillas',status:'HABILITADO'},
{id:6,user:'jefe.centro',area:'Administración de Centros',role:'Jefe / Responsable',status:'HABILITADO'}
];
let users=load('sedeges_demo_users_v3',defaultUsers);
const notices=[
{title:'Vacaciones por revisar',detail:'3 solicitudes esperan validación o autorización.',target:'dashboard',icon:'calendar'},
{title:'Boletas en seguimiento',detail:'5 boletas tienen pasos pendientes de autorización.',target:'control',icon:'map-marker'},
{title:'Actualización anual',detail:'2 fichas personales esperan verificación de Kardex.',target:'nomina',icon:'address-card-o'},
{title:'Novedades para Planillas',detail:'2 registros de Control de Personal están listos para procesamiento.',target:'planillas',icon:'calculator'}
];
function clone(v){return JSON.parse(JSON.stringify(v));}
function load(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):clone(d)}catch(e){return clone(d)}}
function save(){try{localStorage.setItem('sedeges_demo_users_v3',JSON.stringify(users))}catch(e){}}
function esc(s){return String(s==null?'':s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));}
window.renderUsers=function(){const q=($('#userSearch').val()||'').toLowerCase();const rows=users.filter(u=>(u.user+' '+u.area+' '+u.role).toLowerCase().includes(q));$('#usersTable').html(rows.map(u=>`<tr class="${u.status==='INHABILITADO'?'row-muted':''}"><td><b>${esc(u.user)}</b></td><td>${esc(u.area)}</td><td>${esc(u.role)}</td><td><span class="status-pill ${u.status==='HABILITADO'?'s-ok':'s-neutral'}">${u.status==='HABILITADO'?'Habilitado':'Inhabilitado'}</span></td><td><div class="table-actions"><button class="btn btn-xs btn-default" title="Editar" onclick="openUserForm(${u.id})"><i class="fa fa-pencil"></i></button><button class="btn btn-xs btn-primary" title="Permisos" onclick="showPermissions('${esc(u.role)}')"><i class="fa fa-key"></i></button><button class="btn btn-xs btn-warning" title="Habilitar / Inhabilitar" onclick="toggleUser(${u.id})"><i class="fa fa-power-off"></i></button></div></td></tr>`).join(''));};
window.openUserForm=function(id){const u=id?users.find(x=>x.id===Number(id)):null;$('#userFormTitle').text(u?'Editar usuario':'Nuevo usuario');$('#ufId').val(u?u.id:'');$('#ufUser').val(u?u.user:'');$('#ufArea').val(u?u.area:'Kardex');$('#ufRole').val(u?u.role:'');$('#ufStatus').val(u?u.status:'HABILITADO');$('#userFormModal').modal('show');};
window.saveUserForm=function(){const id=Number($('#ufId').val()||0),user=$('#ufUser').val().trim(),area=$('#ufArea').val(),role=$('#ufRole').val().trim(),status=$('#ufStatus').val();if(!user||!role){openToast('Complete usuario y rol');return;}if(id){Object.assign(users.find(x=>x.id===id),{user,area,role,status});}else{users.push({id:Math.max(0,...users.map(x=>x.id))+1,user,area,role,status});}save();renderUsers();$('#userFormModal').modal('hide');openToast(id?'Usuario actualizado':'Usuario registrado');};
window.toggleUser=function(id){const u=users.find(x=>x.id===Number(id));if(!u)return;u.status=u.status==='HABILITADO'?'INHABILITADO':'HABILITADO';save();renderUsers();openToast('Usuario '+u.status.toLowerCase());};
window.showPermissions=function(role){$('#notificationsBody').html(`<div class="permission-card"><h4><i class="fa fa-key"></i> ${esc(role)}</h4><p>Vista demostrativa de permisos por rol. La versión productiva aplicará permisos en interfaz y también a nivel de API/base de datos.</p><table class="table table-condensed"><tr><th>Acción</th><th>Permiso</th></tr><tr><td>Consultar información permitida</td><td><span class="status-pill s-ok">Sí</span></td></tr><tr><td>Editar registros del área</td><td><span class="status-pill s-info">Según rol</span></td></tr><tr><td>Administración general</td><td><span class="status-pill s-neutral">Solo Administrador</span></td></tr></table></div>`);$('#notificationsModal .modal-title').text('Permisos del rol');$('#notificationsModal').modal('show');};
window.openNotifications=function(){$('#notificationsModal .modal-title').text('Bandeja de pendientes y notificaciones');$('#notificationsBody').html(notices.map(n=>`<div class="notification-row" onclick="$('#notificationsModal').modal('hide');showPage('${n.target}')"><i class="fa fa-${n.icon}"></i><div><b>${n.title}</b><small>${n.detail}</small></div><i class="fa fa-chevron-right"></i></div>`).join(''));$('#notificationsModal').modal('show');};
window.openPresentationGuide=function(){$('#presentationGuideModal').modal('show');};
const roleTargets={
'Administrador':['dashboard','administracion','nomina','expediente','comisiones','rrhh','control','planillas','servidor','reportes'],
'Kardex':['dashboard','nomina','expediente','comisiones','servidor','reportes'],
'Recursos Humanos':['dashboard','nomina','expediente','comisiones','rrhh','reportes'],
'Control de Personal':['dashboard','nomina','expediente','control','reportes'],
'Planillas':['dashboard','nomina','expediente','planillas','reportes'],
'Jefe / Responsable':['dashboard','nomina','control','servidor'],
'Servidor Público':['servidor']
};
window.changeDemoRole=function(role){try{localStorage.setItem('sedeges_demo_role_v3',role)}catch(e){};const allowed=roleTargets[role]||roleTargets.Administrador;$('.side-menu a.nav-link[data-target]').each(function(){const t=$(this).data('target'),li=$(this).closest('li'); if(allowed.includes(t))li.show(); else li.hide();});$('.profile_info h2').text(role);$('.profile_pic .avatar').text(role.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase());if(role==='Servidor Público')showPage('servidor');else if(!allowed.includes($('.section-page.active').attr('id')?.replace('page-','')))showPage('dashboard');openToast('Vista de rol: '+role);};
window.resetDemoData=function(){if(!confirm('¿Restablecer todos los datos de demostración al estado inicial?'))return;['sedeges_demo_people_v2','sedeges_demo_items_v3','sedeges_demo_memos_v3','sedeges_demo_boletas_v3','sedeges_demo_commissions_v3','sedeges_demo_audit_v3','sedeges_demo_users_v3','sedeges_demo_role_v3'].forEach(k=>localStorage.removeItem(k));location.reload();};
function addBreadcrumb(){const b=$('<div class="demo-breadcrumb"><i class="fa fa-home"></i> Inicio <span>›</span> <b id="breadcrumbCurrent">Dashboard</b><span class="saved-indicator"><i class="fa fa-check-circle"></i> Cambios de demo guardados localmente</span></div>');$('.demo-ribbon').after(b);$(document).on('click','.nav-link[data-target]',function(){const txt=$(this).text().replace(/\s+/g,' ').trim();$('#breadcrumbCurrent').text(txt||'Módulo');});}
function improveDashboard(){const active=$('#peopleTable tr').not('.row-muted').length;$('#page-dashboard .kpi .num').first().text(active||6);const acef=$('#itemsTable .s-neutral').filter(function(){return $(this).text().trim()==='Acéfalo'}).length;$('#page-dashboard .kpi').eq(1).find('.hint').text(acef+' ítems disponibles / acéfalos en la demo');}
function restoreRole(){let r='Administrador';try{r=localStorage.getItem('sedeges_demo_role_v3')||r}catch(e){};$('#demoRole').val(r);changeDemoRole(r);}
$(function(){renderUsers();addBreadcrumb();setTimeout(improveDashboard,200);setTimeout(restoreRole,250);});
})();
