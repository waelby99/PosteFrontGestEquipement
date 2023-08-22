select * from employees where to_char(hire_date,'yyyy')= to_char(sysdate,'yyyy');


select decode(department_id,10,'accounting',20,'research','inconnu') "nom de departement" from employees;



SELECT first_name nom,
case extract(year from hire_date)
when 1998 then 'needs review'
else 'notthisyear'
end REVIEW from employees;



select e.*, to_number(to_char(hire_date,'yyyy')) year,
extract(month from hire_date) "num mois", to_char(hire_date,'month') "nom du mois", (to_char(hire_date,'q')) "num trimestre",
case
when to_number(to_char(hire_date,'q')) between 1 and 2 then 1
else 2 end as "num semestre" from employees e order by 2;


select dense_rank() over(partition by d.department_name order by e.salary desc),
e.first_name, e.last_name, e.salary from employees e join departments d
on e.department_id=d.department_id;


select trunc(avg(salary*12),2) moyenne from employees where department_id=30 and commission_pct is not null;


--2.1
select avg(distinct commission_pct) moyenne from employees where extract(year from hire_date)=extract(year from sysdate);


select count(distinct job_id) as "nbr jours" from employees;


select department_id dep, count(*) nbr from employees group by department_id;



select max(hire_date) dernier, department_id dep from employees where instr(first_name,'S')!=1
group by department_id having min(salary);



select max(hire_date) dernier, department_id dep from employees where instr(first_name,'S')!=1
group by department_id having min(salary)>1000;



select count(*) nbr, extract(month from hire_date) mois from employees where extract(month from hire_date)=extract(year from sysdate) group by extract(month from hire_date);
