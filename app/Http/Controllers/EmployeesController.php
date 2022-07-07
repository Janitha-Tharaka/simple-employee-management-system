<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeesController extends Controller
{
    //Get Employee List from database

    public function getEmployeeList(){
        try{
            // $employees = Employee::all();
            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    /* Get specific employee details */

    public function getEmployeeDetails(Request $request){
        try{
            $employeeData = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeData);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    /* Updating Data */

    public function updateEmployeeData(Request $request){
        try{
            // By doing this, can get the values to the network field to check
            // dd($request->all());
            $employeeId     = $request->get('employeeId');
            $employeeName   = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::where('id',$employeeId)->update([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'Salary' => $employeeSalary
            ]);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    //Delete Employee

    public function destroy(Employee $employee){
        try{
            $employee->delete();
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    //Inserting New Employee

    public function store(Request $request){
        try{
            $employeeName = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::create([
                'employee_name' => $employeeName,
                'salary'        => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'Salary' => $employeeSalary
            ]);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

}
