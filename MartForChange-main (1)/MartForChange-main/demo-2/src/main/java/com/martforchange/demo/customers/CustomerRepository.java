package com.martforchange.demo.customers;

import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository  extends CrudRepository<CustomerDTO,Integer> {

}
