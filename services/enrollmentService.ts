// services/enrollmentService.ts

export interface EnrollmentData {
  courseId: string;
  contact: string;
}

export interface EnrollmentResponse {
  success: boolean;
  message?: string;
  error?: string;
  enrollment?: any;
}

export async function enrollInCourse(data: EnrollmentData): Promise<EnrollmentResponse> {
  try {
    const response = await fetch("/api/students/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Erro ao realizar inscrição");
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao conectar com o servidor");
  }
}

export async function getUserEnrollments() {
  try {
    const response = await fetch("/api/students/enrollments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Erro ao buscar inscrições");
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao conectar com o servidor");
  }
}