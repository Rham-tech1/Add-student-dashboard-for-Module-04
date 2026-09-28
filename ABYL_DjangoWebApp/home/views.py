from django.shortcuts import render

def dynamic_form(request):
    if request.method == "POST":
        student_name = request.POST.get("student_name")
        program = request.POST.get("program")
        year_level = request.POST.get("year_level")  # Extract input

        context = {
            "student_name": student_name,
            "program": program,
            "year_level": year_level,  # Pass to template
        }

        return render(
            request,
            "home/welcome.html",
            context
        )

    return render(
        request,
        "home/dynamic_form.html"
    )