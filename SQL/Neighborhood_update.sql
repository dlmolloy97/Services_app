UPDATE service_requests
SET neighborhood = 'South Boston'
WHERE upper(neighborhood) like '%WATERFRONT%';

UPDATE service_requests
SET neighborhood = 'Allston'
WHERE upper(neighborhood) like '%ALLSTON%';
