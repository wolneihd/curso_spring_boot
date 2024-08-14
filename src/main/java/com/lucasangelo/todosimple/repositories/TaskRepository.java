package com.lucasangelo.todosimple.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lucasangelo.todosimple.models.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
    
    Optional<Task> findById(Long id);
    
    // List<Task> findByUser_Id(Long id);

    //@Query(value = "SELECT t FROM Task t WHERE t.user.id = :id")
    //List<Task> findByUser_Id(@Param("user_id") Long id);

    //@Query(value = "SELECT * FROM Task t WHERE t.user.id = :id", nativeQuery = true)
    //List<Task> findByUser_Id(@Param("user_id") Long id);
}
