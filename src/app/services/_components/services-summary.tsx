'use client';
import { useState } from 'react';
import { summarizeServicesDetails, type SummarizeServicesDetailsOutput } from '@/ai/flows/summarize-services-details';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const servicesDetails = `
Nano Computing ICT Solutions offers a comprehensive range of services.
Network Solutions: We provide end-to-end network solutions including survey, design, implementation, and maintenance. This covers structured cabling and wireless networking.
Security: We provide robust network security solutions for our clients, protecting them from cyber threats.
Communication: Our offerings include modern Video Conferencing and IP Telephony solutions.
Infrastructure: We specialize in Server and Storage solutions, Data Center design and implementation, and reliable Power Solutions.
Software: We also have a skilled team for custom Software Development to meet unique business needs.
`;

export default function ServicesSummary() {
  const [summaryData, setSummaryData] = useState<SummarizeServicesDetailsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await summarizeServicesDetails({ servicesDetails });
      setSummaryData(result);
    } catch (e) {
      setError('Failed to generate summary. Please try again.');
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <Card className="bg-background shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary font-headline">AI-Generated Service Overview</CardTitle>
        <CardDescription>Click the button for a quick, AI-powered summary of our key service areas.</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-6">
          <Button onClick={handleSummarize} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Services...
              </>
            ) : (
              'Generate Overview'
            )}
          </Button>
          {error && <p className="mt-4 text-destructive">{error}</p>}
        </div>

        {summaryData && (
          <div className="mt-6 p-6 bg-secondary rounded-lg animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-2 text-primary">Key Offerings</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">{summaryData.summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
