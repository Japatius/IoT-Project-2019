select * 
from (
	select 
		@row := @row +1 as id, temperature, pressure, humidity
	from (
		select @row := 0)r, raw_values
	) raw_values
where id % 6 = 0;
